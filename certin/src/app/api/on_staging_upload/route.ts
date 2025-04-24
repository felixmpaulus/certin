import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Environment variables - these should be added to your .env.local file
const GOOGLE_CLOUD_PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT_ID || ''
const GOOGLE_CLOUD_LOCATION = process.env.GOOGLE_CLOUD_LOCATION || 'us'
const GOOGLE_CLOUD_PROCESSOR_ID = process.env.GOOGLE_CLOUD_PROCESSOR_ID || ''
const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS || '{}'
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_SERVICE_ROLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || ''

export const dynamic = 'force-dynamic' // Make sure the function is not cached

// Handle GET requests (e.g., browser access)
export async function GET() {
  console.log('GET request received to on_staging_upload endpoint')
  return Response.json(
    {
      success: false,
      error: 'This endpoint only accepts POST requests with valid payload',
      message: 'Please use a POST request with the appropriate webhook payload',
    },
    { status: 405 }
  )
}

export async function POST(req: NextRequest) {
  console.log('POST request received to on_staging_upload endpoint')

  try {
    // Parse the webhook payload
    let payload
    try {
      payload = await req.json()
      console.log('Received payload:', JSON.stringify(payload))
    } catch (error) {
      console.error('Failed to parse request payload:', error)
      return Response.json(
        {
          success: false,
          error: 'Invalid or missing payload',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        { status: 400 }
      )
    }

    // Validate payload structure
    if (!payload || !payload.record) {
      console.error('Invalid payload structure: missing record property', payload)
      return Response.json(
        {
          success: false,
          error: 'Invalid payload structure: missing record property',
        },
        { status: 400 }
      )
    }

    const { name, bucket_id, id: fileId, owner, metadata } = payload.record

    // Validate required fields
    if (!name || !bucket_id || !fileId) {
      console.error('Missing required fields in payload', { name, bucket_id, fileId })
      return Response.json(
        {
          success: false,
          error: 'Missing required fields in payload',
          required: ['name', 'bucket_id', 'id'],
          received: { name, bucket_id, fileId },
        },
        { status: 400 }
      )
    }

    console.log(
      `Processing document ${name} from bucket ${bucket_id}, file ID: ${fileId}, owner: ${
        owner || 'unknown'
      }`
    )

    // Initialize Supabase client with service role key for admin access
    console.log('Initializing Supabase client')
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    // Step 1: Create the document as a row in the staging table
    console.log('Step 1: Creating document record in database')
    const { data: documentRow, error: insertError } = await supabase
      .from('documents')
      .insert({
        file_name: name,
        file_id: fileId,
        bucket_id: bucket_id,
        owner_id: owner,
        status: 'processing',
        metadata: metadata || {},
      })
      .select()
      .single()

    if (insertError) {
      console.error('Database insert error:', insertError)
      throw new Error(`Error inserting document row: ${insertError.message}`)
    }

    console.log(`Created document row with ID: ${documentRow.id}`)

    // Step 2: Download the file from storage
    console.log(`Step 2: Downloading file "${name}" from bucket "${bucket_id}"`)
    const { data: fileData, error: downloadError } = await supabase.storage
      .from(bucket_id)
      .download(name)

    if (downloadError || !fileData) {
      console.error('File download error:', downloadError || 'File not found')
      throw new Error(`Error downloading file: ${downloadError?.message || 'File not found'}`)
    }

    console.log('File downloaded successfully')

    // Convert file to base64
    console.log('Converting file to base64')
    const fileArrayBuffer = await fileData.arrayBuffer()
    const fileBytes = new Uint8Array(fileArrayBuffer)
    const fileBase64 = Buffer.from(fileBytes).toString('base64')
    console.log(`File converted to base64 (${fileBase64.length} characters)`)

    // Step 3: Call Google Cloud Document AI API
    console.log('Step 3: Calling Google Cloud Document AI API')
    const documentAiEndpoint = `https://${GOOGLE_CLOUD_LOCATION}-documentai.googleapis.com/v1/projects/${GOOGLE_CLOUD_PROJECT_ID}/locations/${GOOGLE_CLOUD_LOCATION}/processors/${GOOGLE_CLOUD_PROCESSOR_ID}:process`
    console.log(`Document AI endpoint: ${documentAiEndpoint}`)

    // Parse the Google credentials
    console.log('Parsing Google credentials')
    let credentials
    try {
      credentials = JSON.parse(GOOGLE_APPLICATION_CREDENTIALS)
    } catch (error) {
      console.error('Failed to parse Google credentials:', error)
      throw new Error(
        `Invalid Google credentials format: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`
      )
    }

    // Get access token
    console.log('Requesting OAuth token from Google')
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: credentials.client_email,
      }),
    })

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text()
      console.error('Failed to get Google access token:', errorText)
      throw new Error(`Google OAuth error: ${tokenResponse.status} - ${errorText}`)
    }

    const tokenData = await tokenResponse.json()
    console.log('Received OAuth token from Google')
    const accessToken = tokenData.access_token

    // Call Document AI API
    console.log('Making request to Document AI API')
    const mimetype = metadata?.mimetype || 'application/pdf'
    console.log(`File mime type: ${mimetype}`)

    const response = await fetch(documentAiEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rawDocument: {
          content: fileBase64,
          mimeType: mimetype,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Document AI API error:', { status: response.status, error: errorText })
      throw new Error(`Document AI API error: ${response.status} - ${errorText}`)
    }

    console.log('Document AI API request successful')
    const documentAiResult = await response.json()
    console.log('Received Document AI results')

    // Step 4: Update the document row with the structured data
    console.log(`Step 4: Updating document record with ID ${documentRow.id}`)
    const { error: updateError } = await supabase
      .from('documents')
      .update({
        status: 'processed',
        processed_data: documentAiResult,
        processed_at: new Date().toISOString(),
      })
      .eq('id', documentRow.id)

    if (updateError) {
      console.error('Database update error:', updateError)
      throw new Error(`Error updating document row: ${updateError.message}`)
    }

    console.log(`Successfully processed document ${name} with ID ${documentRow.id}`)

    return Response.json({
      success: true,
      message: 'Document processed successfully',
      document_id: documentRow.id,
    })
  } catch (error) {
    console.error('Error processing document:', error)

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        stack:
          process.env.NODE_ENV === 'development'
            ? error instanceof Error
              ? error.stack
              : undefined
            : undefined,
      },
      {
        status: 500,
      }
    )
  }
}
