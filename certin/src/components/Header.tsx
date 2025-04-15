import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ClientNav } from "./ClientNav";
import { cookies } from "next/headers";

export async function Header() {
  // Force revalidation by reading cookies
  cookies();

  const supabase = await createClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Certin
        </Link>
        <nav>
          <ClientNav session={session} />
        </nav>
      </div>
    </header>
  );
}
