"use client";

import { CheckCircle2 } from "lucide-react";

export function ScoreCard() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm shadow-blue-500/5 border border-blue-100/50 flex items-center gap-8">
      {/* Circular Gauge Placeholder - In a real app, use a chart library or SVG */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#E5E7EB"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#22C55E"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset="60" // 78% roughly
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-[#22C55E]">78</span>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-blue-600 mb-1">
          Score de santé global
        </p>
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          <h3 className="text-xl font-bold text-zinc-900">
            Performance Excellente
          </h3>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed max-w-lg">
          Les indicateurs financiers sont au vert. La croissance du chiffre
          d'affaires et la stabilité de la trésorerie démontrent une gestion
          solide.
        </p>
      </div>
    </div>
  );
}
