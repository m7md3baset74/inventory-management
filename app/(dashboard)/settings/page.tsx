import type { Metadata } from "next";
import { getCurrentUser } from "@/lip/auth";
import { AccountSettings } from "@stackframe/stack";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings and preferences.",
};

export default async function SettingsPage() {
  await getCurrentUser();

  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage your account settings and preferences."
      />

      <div className="max-w-6xl">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <AccountSettings fullPage />
        </div>
      </div>
    </>
  );
}