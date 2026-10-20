import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";

// Signed-in pages are private, keep them out of search results
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="p-4 md:ml-64 md:p-8">{children}</main>
    </div>
  );
}
