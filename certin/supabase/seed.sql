-- Create storage bucket for file uploads
INSERT INTO storage.buckets (id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
VALUES ('file-upload', 'file-upload', false, false, null, null);
