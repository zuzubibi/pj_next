"use client";

import Link from "next/link";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button";

interface HeaderProps {
  session: Session | null;
}

function Header(props: HeaderProps) {
  const { session } = props;

  return (
    <header className="p-2 flex items-center justify-between border-b">
      <Link href="/" className="text-xl font-semibold">
        Mini Community
      </Link>

      <div className="flex items-center justify-end gap-2">
        {session ? (
          <>
            <span className="text-sm">{`Hello, ${session.user?.name}!`}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </Button>
          </>
        ) : (
          <Link
            href="/sign-in"
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
