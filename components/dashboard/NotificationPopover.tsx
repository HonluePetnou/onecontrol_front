"use client";

import { useState } from "react";
import { Bell, Check, Clock, Info } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { clsx } from "clsx";

const notifications = [
  {
    id: 1,
    title: "Nouvelle simulation",
    message: "La simulation #1234 a été générée avec succès.",
    time: "Il y a 5 min",
    type: "success",
    read: false,
  },
  {
    id: 2,
    title: "Alerte de stock",
    message: "Le produit 'iPhone 15' est en rupture de stock.",
    time: "Il y a 1 heure",
    type: "warning",
    read: false,
  },
  {
    id: 3,
    title: "Mise à jour système",
    message: "Une maintenance est prévue ce soir à 23h.",
    time: "Il y a 3 heures",
    type: "info",
    read: true,
  },
];

export function NotificationPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false), isOpen);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-blue-600"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white animate-pulse" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl overflow-hidden z-50 ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 border-b border-gray-100/50 bg-white/50">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {unreadCount} nouvelles
              </span>
            </div>
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={clsx(
                  "p-4 border-b border-gray-50 hover:bg-gray-50/80 transition-colors cursor-pointer flex gap-3",
                  !notification.read && "bg-blue-50/30"
                )}
              >
                <div
                  className={clsx(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    notification.type === "success" &&
                      "bg-green-100 text-green-600",
                    notification.type === "warning" &&
                      "bg-amber-100 text-amber-600",
                    notification.type === "info" && "bg-blue-100 text-blue-600"
                  )}
                >
                  {notification.type === "success" && (
                    <Check className="w-4 h-4" />
                  )}
                  {notification.type === "warning" && (
                    <Info className="w-4 h-4" />
                  )}
                  {notification.type === "info" && <Info className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                    {notification.message}
                  </p>
                  <div className="flex items-center gap-1 mt-1.5 text-[10px] text-gray-400">
                    <Clock className="w-3 h-3" />
                    {notification.time}
                  </div>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                )}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-100/50 bg-gray-50/50 text-center">
            <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
              Marquer tout comme lu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
