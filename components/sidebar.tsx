import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ currentPath = "/dashboard" }: { currentPath: string }) {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <>
      {/* Checkbox controller */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      {/* Menu Button */}
      <label
        htmlFor="menu-toggle"
        className="fixed top-4 left-4 z-30 bg-purple-700 text-white p-0.5 rounded shadow cursor-pointer md:hidden"
      >
        <BarChart3 className="w-7 h-7" />
      </label>

      {/* Overlay */}
      <label
        htmlFor="menu-toggle"
        className="fixed inset-0 bg-black/10 z-20 hidden peer-checked:block md:hidden"
      ></label>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-30 transform transition-transform duration-300 -translate-x-full peer-checked:translate-x-0 md:translate-x-0`}
      >
        <div className="mb-8 flex items-center justify-between md:justify-start md:space-x-2">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-7 h-7 p-0.5 bg-purple-700 rounded" />
            <span className="text-lg font-semibold">Inventory App</span>
          </div>
          <label
            htmlFor="menu-toggle"
            className="md:hidden cursor-pointer"
          >
            ✕
          </label>
        </div>

        <nav className="space-y-1">
          <div className="text-sm font-semibold text-gray-400 uppercase">
            Inventory
          </div>
          {navigation.map((item, key) => {
            const IconComponent = item.icon;
            const isActive = currentPath === item.href;
            return (
              <Link
                href={item.href}
                key={key}
                className={`flex items-center space-x-3 py-2 px-3 rounded-lg ${
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

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
          <UserButton showUserInfo />
        </div>
      </div>
    </>
  );
}
