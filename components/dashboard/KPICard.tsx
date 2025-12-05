"use client";

import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface KPICardProps {
  title: string;
  value: string;
  trend: string;
  trendUp?: boolean;
  trendNeutral?: boolean;
  icon: LucideIcon;
  iconColor?: string; // Optional now, as we default to blue
  iconBg?: string; // Optional now
  statusText?: string;
}

export function KPICard({
  title,
  value,
  trend,
  trendUp,
  trendNeutral,
  icon: Icon,
  statusText,
}: KPICardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-lg border border-zinc-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs font-medium">
          {trendNeutral ? (
            <span className="text-zinc-700 bg-zinc-100 px-2 py-1 rounded-md">
              {trend}
            </span>
          ) : (
            <span
              className={clsx(
                "px-2 py-1 rounded-md",
                trendUp
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-red-700 bg-red-50"
              )}
            >
              {trend}
            </span>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-zinc-900 tracking-tight mb-1">
          {value}
        </h3>
        <p className="text-sm font-medium text-zinc-500">{title}</p>
      </div>

      {statusText && (
        <div className="mt-4 pt-3 border-t border-zinc-50">
          <span className="text-xs font-medium text-zinc-500">
            {statusText}
          </span>
        </div>
      )}
    </div>
  );
}
