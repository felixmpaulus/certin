create table "public"."contracts" (
    "id" uuid not null,
    "contract_number" text,
    "start_date" date,
    "end_date" date,
    "parties" jsonb,
    "contract_type" text,
    "value" numeric(15,2),
    "currency" text,
    "summary" text,
    "key_terms" jsonb,
    "metadata" jsonb,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);


alter table "public"."contracts" enable row level security;

create table "public"."documents" (
    "id" uuid not null default uuid_generate_v4(),
    "user_id" uuid not null,
    "document_type" text not null,
    "storage_path" text not null,
    "file_name" text not null,
    "original_file_name" text not null,
    "mime_type" text not null,
    "file_size" bigint not null,
    "status" text not null,
    "processing_error" text,
    "document_ai_raw_response" jsonb,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);


alter table "public"."documents" enable row level security;

create table "public"."invoices" (
    "id" uuid not null,
    "invoice_number" text,
    "issue_date" date,
    "due_date" date,
    "vendor_name" text,
    "vendor_address" text,
    "vendor_tax_id" text,
    "customer_name" text,
    "customer_address" text,
    "customer_tax_id" text,
    "total_amount" numeric(15,2),
    "currency" text,
    "line_items" jsonb,
    "metadata" jsonb,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);


alter table "public"."invoices" enable row level security;

CREATE UNIQUE INDEX contracts_pkey ON public.contracts USING btree (id);

CREATE UNIQUE INDEX documents_pkey ON public.documents USING btree (id);

CREATE INDEX documents_status_idx ON public.documents USING btree (status);

CREATE INDEX documents_user_id_idx ON public.documents USING btree (user_id);

CREATE UNIQUE INDEX invoices_pkey ON public.invoices USING btree (id);

alter table "public"."contracts" add constraint "contracts_pkey" PRIMARY KEY using index "contracts_pkey";

alter table "public"."documents" add constraint "documents_pkey" PRIMARY KEY using index "documents_pkey";

alter table "public"."invoices" add constraint "invoices_pkey" PRIMARY KEY using index "invoices_pkey";

alter table "public"."contracts" add constraint "contracts_id_fkey" FOREIGN KEY (id) REFERENCES documents(id) ON DELETE CASCADE not valid;

alter table "public"."contracts" validate constraint "contracts_id_fkey";

alter table "public"."documents" add constraint "documents_document_type_check" CHECK ((document_type = ANY (ARRAY['contract'::text, 'invoice'::text]))) not valid;

alter table "public"."documents" validate constraint "documents_document_type_check";

alter table "public"."documents" add constraint "documents_status_check" CHECK ((status = ANY (ARRAY['staging'::text, 'approved'::text]))) not valid;

alter table "public"."documents" validate constraint "documents_status_check";

alter table "public"."documents" add constraint "documents_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."documents" validate constraint "documents_user_id_fkey";

alter table "public"."invoices" add constraint "invoices_id_fkey" FOREIGN KEY (id) REFERENCES documents(id) ON DELETE CASCADE not valid;

alter table "public"."invoices" validate constraint "invoices_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
   new.updated_at = now();
   return new;
end;
$function$
;

grant delete on table "public"."contracts" to "anon";

grant insert on table "public"."contracts" to "anon";

grant references on table "public"."contracts" to "anon";

grant select on table "public"."contracts" to "anon";

grant trigger on table "public"."contracts" to "anon";

grant truncate on table "public"."contracts" to "anon";

grant update on table "public"."contracts" to "anon";

grant delete on table "public"."contracts" to "authenticated";

grant insert on table "public"."contracts" to "authenticated";

grant references on table "public"."contracts" to "authenticated";

grant select on table "public"."contracts" to "authenticated";

grant trigger on table "public"."contracts" to "authenticated";

grant truncate on table "public"."contracts" to "authenticated";

grant update on table "public"."contracts" to "authenticated";

grant delete on table "public"."contracts" to "service_role";

grant insert on table "public"."contracts" to "service_role";

grant references on table "public"."contracts" to "service_role";

grant select on table "public"."contracts" to "service_role";

grant trigger on table "public"."contracts" to "service_role";

grant truncate on table "public"."contracts" to "service_role";

grant update on table "public"."contracts" to "service_role";

grant delete on table "public"."documents" to "anon";

grant insert on table "public"."documents" to "anon";

grant references on table "public"."documents" to "anon";

grant select on table "public"."documents" to "anon";

grant trigger on table "public"."documents" to "anon";

grant truncate on table "public"."documents" to "anon";

grant update on table "public"."documents" to "anon";

grant delete on table "public"."documents" to "authenticated";

grant insert on table "public"."documents" to "authenticated";

grant references on table "public"."documents" to "authenticated";

grant select on table "public"."documents" to "authenticated";

grant trigger on table "public"."documents" to "authenticated";

grant truncate on table "public"."documents" to "authenticated";

grant update on table "public"."documents" to "authenticated";

grant delete on table "public"."documents" to "service_role";

grant insert on table "public"."documents" to "service_role";

grant references on table "public"."documents" to "service_role";

grant select on table "public"."documents" to "service_role";

grant trigger on table "public"."documents" to "service_role";

grant truncate on table "public"."documents" to "service_role";

grant update on table "public"."documents" to "service_role";

grant delete on table "public"."invoices" to "anon";

grant insert on table "public"."invoices" to "anon";

grant references on table "public"."invoices" to "anon";

grant select on table "public"."invoices" to "anon";

grant trigger on table "public"."invoices" to "anon";

grant truncate on table "public"."invoices" to "anon";

grant update on table "public"."invoices" to "anon";

grant delete on table "public"."invoices" to "authenticated";

grant insert on table "public"."invoices" to "authenticated";

grant references on table "public"."invoices" to "authenticated";

grant select on table "public"."invoices" to "authenticated";

grant trigger on table "public"."invoices" to "authenticated";

grant truncate on table "public"."invoices" to "authenticated";

grant update on table "public"."invoices" to "authenticated";

grant delete on table "public"."invoices" to "service_role";

grant insert on table "public"."invoices" to "service_role";

grant references on table "public"."invoices" to "service_role";

grant select on table "public"."invoices" to "service_role";

grant trigger on table "public"."invoices" to "service_role";

grant truncate on table "public"."invoices" to "service_role";

grant update on table "public"."invoices" to "service_role";

create policy "Users can manage their own contracts"
on "public"."contracts"
as permissive
for all
to public
using ((auth.uid() = ( SELECT documents.user_id
   FROM documents
  WHERE (documents.id = contracts.id))));


create policy "Users can view and manage their own documents"
on "public"."documents"
as permissive
for all
to public
using ((auth.uid() = user_id));


create policy "Users can manage their own invoices"
on "public"."invoices"
as permissive
for all
to public
using ((auth.uid() = ( SELECT documents.user_id
   FROM documents
  WHERE (documents.id = invoices.id))));


CREATE TRIGGER update_contracts_updated_at BEFORE UPDATE ON public.contracts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON public.documents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_invoices_updated_at BEFORE UPDATE ON public.invoices FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


