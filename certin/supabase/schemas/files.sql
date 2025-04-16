-- Create documents table
create table "documents" (
  "id" uuid primary key default uuid_generate_v4(),
  "user_id" uuid not null references auth.users(id) on delete cascade,
  "document_type" text not null check (document_type in ('contract', 'invoice')),
  "storage_path" text not null,
  "file_name" text not null,
  "original_file_name" text not null,
  "mime_type" text not null,
  "file_size" bigint not null,
  "status" text not null check (status in ('staging', 'approved')),
  "processing_error" text,
  "document_ai_raw_response" jsonb,
  "created_at" timestamptz not null default now(),
  "updated_at" timestamptz not null default now()
);

-- Create a profile-level security policy
alter table "documents" enable row level security;
create policy "Users can view and manage their own documents"
  on documents for all
  using (auth.uid() = user_id);

-- Create index on user_id for faster queries
create index documents_user_id_idx on documents(user_id);

-- Create index on status for faster filtering
create index documents_status_idx on documents(status);

-- Create function to update the updated_at column
create or replace function update_updated_at_column()
returns trigger as $$
begin
   new.updated_at = now();
   return new;
end;
$$ language plpgsql;

-- Create trigger to update the updated_at column
create trigger update_documents_updated_at
before update on documents
for each row execute procedure update_updated_at_column();

-- Create invoices table
create table "invoices" (
  "id" uuid primary key references documents(id) on delete cascade,
  "invoice_number" text,
  "issue_date" date,
  "due_date" date,
  "vendor_name" text,
  "vendor_address" text,
  "vendor_tax_id" text,
  "customer_name" text,
  "customer_address" text,
  "customer_tax_id" text,
  "total_amount" decimal(15, 2),
  "currency" text,
  "line_items" jsonb,
  "metadata" jsonb,
  "created_at" timestamptz not null default now(),
  "updated_at" timestamptz not null default now()
);

-- Create a profile-level security policy
alter table "invoices" enable row level security;
create policy "Users can manage their own invoices"
  on invoices for all
  using (auth.uid() = (select user_id from documents where id = invoices.id));

-- Create trigger to update the updated_at column
create trigger update_invoices_updated_at
before update on invoices
for each row execute procedure update_updated_at_column();

-- supabase/schemas/03_contracts.sql
create table "contracts" (
  "id" uuid primary key references documents(id) on delete cascade,
  "contract_number" text,
  "start_date" date,
  "end_date" date,
  "parties" jsonb,
  "contract_type" text,
  "value" decimal(15, 2),
  "currency" text,
  "summary" text,
  "key_terms" jsonb,
  "metadata" jsonb,
  "created_at" timestamptz not null default now(),
  "updated_at" timestamptz not null default now()
);

-- Create a profile-level security policy
alter table "contracts" enable row level security;
create policy "Users can manage their own contracts"
  on contracts for all
  using (auth.uid() = (select user_id from documents where id = contracts.id));

-- Create trigger to update the updated_at column
create trigger update_contracts_updated_at
before update on contracts
for each row execute procedure update_updated_at_column();


-- Create storage bucket for document uploads if it doesn't exist
insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do nothing;

-- Create policy to allow authenticated users to upload files
create policy "Users can upload their own documents"
on storage.objects for insert
to authenticated
with check (bucket_id = 'documents' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Create policy to allow users to select their own files
create policy "Users can view their own documents"
on storage.objects for select
to authenticated
using (bucket_id = 'documents' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Create policy to allow users to update their own files
create policy "Users can update their own documents"
on storage.objects for update
to authenticated
using (bucket_id = 'documents' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Create policy to allow users to delete their own files
create policy "Users can delete their own documents"
on storage.objects for delete
to authenticated
using (bucket_id = 'documents' AND (storage.foldername(name))[1] = auth.uid()::text);