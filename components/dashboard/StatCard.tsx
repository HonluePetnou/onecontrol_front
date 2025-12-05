"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp?: boolean;
  trendNeutral?: boolean;
  icon: LucideIcon;
  className?: string;
}

export function StatCard({
  title,
  value,
  trend,
  trendUp,
  trendNeutral,
  icon: Icon,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-24 h-24 text-blue-600" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div
            className={cn(
              "p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm",
              "bg-blue-100/50 text-blue-600"
            )}
          >
            <Icon className="w-5 h-5" />
          </div>
          {trendNeutral ? (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
              {trend}
            </span>
          ) : (
            <span
              className={cn(
                "text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1",
                trendUp
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-red-50 text-red-600"
              )}
            >
              {trend}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            {value}
          </h3>
          <p className="text-sm font-medium text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
}
