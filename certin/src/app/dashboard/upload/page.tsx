'use client'
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/dropzone'
import { useSupabaseUpload } from '@/hooks/use-supabase-upload'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export default function UploadPage() {
  const [userId, setUserId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get the current user's ID
    const getUser = async () => {
      setIsLoading(true)
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUserId(user.id)
      }
      setIsLoading(false)
    }

    getUser()
  }, [])

  const props = useSupabaseUpload({
    bucketName: 'file-upload',
    path: userId ? `${userId}/` : undefined, // No leading slash - just the user ID
    allowedMimeTypes: ['application/pdf'],
    maxFiles: 2,
    maxFileSize: 1000 * 1000 * 10, // 10MB
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!userId) {
    return <div>Please sign in to upload files</div>
  }

  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>Upload</h1>
      <p className='text-muted-foreground'>Upload documents and files.</p>
      <div className='w-[500px]'>
        <Dropzone {...props}>
          <DropzoneEmptyState />
          <DropzoneContent />
        </Dropzone>
      </div>
    </div>
  )
}
