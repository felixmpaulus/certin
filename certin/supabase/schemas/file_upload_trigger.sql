-- Create trigger for file uploads to call webhook
CREATE TRIGGER on_file_upload 
AFTER INSERT ON storage.objects 
FOR EACH ROW 
EXECUTE FUNCTION supabase_functions.http_request(
  'http://host.docker.internal:3000/api/on_staging_upload', 
  'POST', 
  '{"Content-type":"application/json"}', 
  '{}', 
  '5000'
); 