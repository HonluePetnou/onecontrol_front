"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { NotificationPopover } from "@/components/dashboard/NotificationPopover";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const pathname = usePathname();

  const titleMap: Record<string, string> = {
    "/": "Accueil",
    "/dashboard": "Tableau de bord",
    "/simulations": "Simulations",
    "/data": "Données",
    "/settings": "Paramètres",
  };
  const current = Object.keys(titleMap).find((k) => pathname.startsWith(k));
  const title = current ? titleMap[current!] : "OneControl";
  return (
    <header
      role="banner"
      aria-label="Barre supérieure"
      className="h-16 bg-white border-b border-zinc-200 sticky top-0 z-30 px-4 lg:px-8 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-zinc-900">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <NotificationPopover />

        <div className="flex items-center gap-3 pl-4 border-l border-zinc-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-zinc-900">Jean Dupont</p>
            <p className="text-xs text-zinc-500">Admin</p>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
