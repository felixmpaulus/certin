"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "@/components/logout-button";
import { type Session } from "@supabase/supabase-js";

type Props = {
  session: Session | null;
};

export function ClientNav({ session }: Props) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) {
    return <LogoutButton />;
  }

  const linkTo = session ? "/dashboard" : "/auth/login";

  return (
    <Link href={linkTo} className="px-4 py-2 rounded-md bg-black text-white hover:bg-black/90 transition-colors">
      {session ? "Dashboard" : "Login"}
    </Link>
  );
}
