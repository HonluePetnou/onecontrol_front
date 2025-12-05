"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Activity,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Prospect", href: "/dashboard/prospect", icon: Users },
  { name: "Analyses CA", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={twMerge(
          "fixed inset-y-0 left-0 z-40 w-64 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-zinc-800",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        >
        <div className="flex flex-col h-full bg-linear-to-b from-violet-700 via-indigo-700 to-indigo-800">
          <div className="flex items-center gap-3 p-6 border-b border-white/10">
            <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
              O
            </div>
            <span className="text-xl font-bold tracking-tight text-white">OneControl</span>
          </div>

          <nav className="flex-1 px-3 py-6 space-y-1">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/dashboard" && pathname === "/dashboard");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-indigo-100 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <item.icon
                    className={clsx(
                      "w-5 h-5 transition-colors",
                      isActive ? "text-white" : "text-indigo-200 group-hover:text-white"
                    )}
                  />
                  {item.name}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300 border border-zinc-600">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-200 truncate">
                  Jean Dupont
                </p>
                <p className="text-xs text-zinc-500 truncate">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden backdrop-blur-sm"
        />
      )}
    </>
  );
}
