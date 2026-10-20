"use client";

import { UserButton } from "@stackframe/stack";
import { BarChart3, Menu, Package, Plus, Settings, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Add Product", href: "/add-product", icon: Plus },
  { name: "Settings", href: "/settings", icon: Settings },
];

function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center space-x-2">
      <BarChart3 className="w-7 h-7 p-0.5 bg-purple-700 rounded" />
      <span className="text-lg font-semibold">Inventory App</span>
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-20 flex items-center gap-3 bg-gray-900 px-4 py-3 text-white md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="app-sidebar"
          className="rounded p-1 hover:bg-gray-800"
        >
          <Menu className="w-6 h-6" />
        </button>
        <Logo />
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        id="app-sidebar"
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-gray-900 p-6 text-white transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded p-1 hover:bg-gray-800 md:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Inventory
          </div>
          {navigation.map((item) => {
            const IconComponent = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-purple-100 text-gray-800"
                    : "hover:bg-gray-800 text-gray-300"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-700 pt-6">
          <UserButton showUserInfo />
        </div>
      </aside>
    </>
  );
}
