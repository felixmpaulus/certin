-- Create a storage bucket for file uploads
INSERT INTO storage.buckets (id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
VALUES ('file-upload', 'file-upload', false, false, null, null);
-- Add a comment to the bucket (using SQL comment instead of COMMENT ON BUCKET syntax)
-- Bucket for user file uploads, organized by user UUID

-- Policy for users to read their own files
CREATE POLICY "Users can view their own files" ON storage.objects
FOR SELECT TO authenticated
USING (
  bucket_id = 'file-upload' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Policy for users to upload their own files
CREATE POLICY "Users can upload their own files" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'file-upload' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Policy for users to update their own files
CREATE POLICY "Users can update their own files" ON storage.objects
FOR UPDATE TO authenticated
USING (
  bucket_id = 'file-upload' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Policy for users to delete their own files
CREATE POLICY "Users can delete their own files" ON storage.objects
FOR DELETE TO authenticated
USING (
  bucket_id = 'file-upload' AND
  auth.uid()::text = (storage.foldername(name))[1]
);
