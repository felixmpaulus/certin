This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## API Routes

### on-staging-upload Route

The `on-staging-upload` route handler is a Next.js API route that processes document uploads. It:

1. Takes a document upload webhook from Supabase Storage
2. Creates a document record in the database
3. Downloads the file from Supabase Storage
4. Processes it with Google Cloud Document AI
5. Updates the document record with the processed data

#### Environment Variables Required

Make sure to add the following environment variables to your `.env.local` file:

```
# Supabase Configuration
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Google Cloud Document AI Configuration
GOOGLE_CLOUD_PROJECT_ID=your-google-cloud-project-id
GOOGLE_CLOUD_LOCATION=us-central1
GOOGLE_CLOUD_PROCESSOR_ID=your-processor-id
GOOGLE_APPLICATION_CREDENTIALS={"your":"google-credentials-json"}
```

#### Usage

To use this API route, send a POST request to `/api/on-staging-upload` with the same payload format that was previously sent to the Supabase Edge Function.
