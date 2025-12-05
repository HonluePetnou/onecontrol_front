"use client";

import {
  User,
  Building2,
  Link2,
  Bell,
  Shield,
  CreditCard,
  Camera,
} from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const settingsNav = [
  { name: "Mon profil", href: "/dashboard/settings/profile", icon: User },
  { name: "Entreprise", href: "/dashboard/settings/company", icon: Building2 },
  { name: "Sécurité", href: "/dashboard/settings/security", icon: Shield },
];

export function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Settings Sidebar */}
      <aside className="w-full lg:w-64 shrink-0 space-y-4">
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-2 sticky top-24">
          {settingsNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon
                  className={clsx(
                    "w-4 h-4 transition-colors",
                    isActive
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-gray-600"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Quick Help */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <h4 className="font-semibold text-sm text-blue-900 mb-1">
            Besoin d'aide ?
          </h4>
          <p className="text-xs text-blue-700 mb-3">
            Notre équipe support est là pour vous aider.
          </p>
          <button className="w-full py-2 bg-white hover:bg-blue-100 rounded-lg text-xs font-medium text-blue-700 transition-colors border border-blue-200 shadow-sm">
            Contacter le support
          </button>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
