"use client";

import {
  Bell,
  Search,
  Calendar,
  Download,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
} from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur border-b border-zinc-100 sticky top-0 z-30">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-zinc-900 flex items-center gap-2">
            Tableau de bord PULSE
          </h1>
          <p className="hidden md:block text-sm text-zinc-600 border-l border-zinc-200 pl-4">
            Vue d'ensemble de la santé financière
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20">
            <Calendar className="w-4 h-4 text-zinc-500" />
            Cette semaine
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-violet-600 to-indigo-600 text-white rounded-full text-sm font-medium hover:from-violet-700 hover:to-indigo-700 transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Exporter
          </button>

          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={clsx(
                "relative p-2 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                showNotifications
                  ? "bg-blue-50 text-blue-600"
                  : "text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50"
              )}
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden">
                <div className="p-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/60">
                  <h3 className="font-semibold text-zinc-900">Notifications</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    3 nouvelles
                  </span>
                </div>
                <div className="max-h-[400px] overflow-y-auto">
                  <div className="divide-y divide-zinc-50">
                    <div className="p-4 hover:bg-zinc-50 transition-colors cursor-pointer flex gap-3">
                      <div className="shrink-0 mt-1">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-900">
                          Performance Excellente
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                          Votre CA est en hausse de 18% ce mois-ci. Produit star
                          : Riz Uncle Ben's.
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-2">
                          Il y a 2 heures
                        </p>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-zinc-50 transition-colors cursor-pointer flex gap-3 bg-amber-50/30">
                      <div className="shrink-0 mt-1">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-amber-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-900">
                          Attention - Stock faible
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                          7 produits sous le seuil d'alerte. Réapprovisionner
                          rapidement.
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-2">
                          Il y a 5 heures
                        </p>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-zinc-50 transition-colors cursor-pointer flex gap-3">
                      <div className="shrink-0 mt-1">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <AlertOctagon className="w-4 h-4 text-orange-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-900">
                          Créances élevées
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                          12 factures impayées totalisant 845,000 FCFA. Clients
                          à relancer.
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-2">Hier</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-zinc-100 bg-zinc-50/60 text-center">
                  <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                    Voir toutes les notifications
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
