import type { Metadata } from "next";
import { SignIn } from "@stackframe/stack";
import Link from "next/link";
import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to manage your products and track inventory levels.",
};

export default async function SignInPage() {
  const user = await stackServerApp.getUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-md w-full space-y-8 px-5 md:px-0">
        <SignIn />
        <Link
          href="/"
          className="block text-center text-sm font-medium text-purple-700 hover:text-purple-900"
        >
          &larr; Back to home
        </Link>
      </div>
    </div>
  );
}