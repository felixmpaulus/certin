INSERT INTO storage.buckets (id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
VALUES ('file-upload', 'file-upload', false, false, null, null);

create policy "Users can delete their own files"
on "storage"."objects"
as permissive
for delete
to authenticated
using (((bucket_id = 'file-upload'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));


create policy "Users can update their own files"
on "storage"."objects"
as permissive
for update
to authenticated
using (((bucket_id = 'file-upload'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));


create policy "Users can upload their own files"
on "storage"."objects"
as permissive
for insert
to authenticated
with check (((bucket_id = 'file-upload'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));


create policy "Users can view their own files"
on "storage"."objects"
as permissive
for select
to authenticated
using (((bucket_id = 'file-upload'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));



