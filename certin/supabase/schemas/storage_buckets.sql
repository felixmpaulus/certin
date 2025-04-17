-- Users can delete their own files
create policy "Users can delete their own files"
on "storage"."objects"
as permissive
for delete
to authenticated
using (((bucket_id = 'file-upload'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));

-- Users can update their own files
create policy "Users can update their own files"
on "storage"."objects"
as permissive
for update
to authenticated
using (((bucket_id = 'file-upload'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));

-- Users can upload their own files
create policy "Users can upload their own files"
on "storage"."objects"
as permissive
for insert
to authenticated
with check (((bucket_id = 'file-upload'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));

-- Users can view their own files
create policy "Users can view their own files"
on "storage"."objects"
as permissive
for select
to authenticated
using (((bucket_id = 'file-upload'::text) AND ((auth.uid())::text = (storage.foldername(name))[1]))); 