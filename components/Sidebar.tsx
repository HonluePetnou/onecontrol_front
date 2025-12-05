"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  Calculator,
  Database,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";

const nav = [
  { name: "Tableau de bord", href: "/dashboard", icon: LayoutDashboard },
  { name: "Simulations", href: "/dashboard/simulations", icon: Calculator },
  { name: "Données", href: "/dashboard/data", icon: Database },
  { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

import { Sheet } from "@/components/ui/sheet";

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [internalOpen, setInternalOpen] = useState(false);
  const open = typeof isOpen === "boolean" ? isOpen : internalOpen;
  const setOpen = (val: boolean) => {
    if (typeof isOpen === "boolean") {
      if (!val && onClose) onClose();
    } else {
      setInternalOpen(val);
    }
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 p-6 border-b border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
          O
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          OneControl
        </span>
      </div>

      <nav role="navigation" className="flex-1 px-3 py-6 space-y-1">
        {nav.map((item) => {
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={active ? "page" : undefined}
              className={clsx(
                "group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon
                className={clsx(
                  "w-5 h-5 transition-colors",
                  active
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-600"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors cursor-pointer group border border-transparent hover:border-gray-200 hover:shadow-sm">
          <Avatar className="h-9 w-9 border border-gray-200">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              Jean Dupont
            </p>
            <p className="text-xs text-gray-500 truncate">
              admin@onecontrol.com
            </p>
          </div>
          <LogOut className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        aria-label="Navigation principale"
        className="hidden lg:block fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200"
      >
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      <Sheet open={open} onOpenChange={setOpen} side="left">
        <SidebarContent />
      </Sheet>
    </>
  );
}
