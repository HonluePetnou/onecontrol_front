"use client";

import { AlertTriangle, CheckCircle2, AlertOctagon } from "lucide-react";

export function AlertList() {
  return (
    <div className="space-y-4">
      <h3 className="flex items-center gap-2 text-lg font-bold text-zinc-900">
        Alertes et Notifications
      </h3>

      <div className="space-y-3">
        {/* Success Alert */}
        <div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm flex gap-4">
          <div className="shrink-0">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-sm mb-1">
              Excellente performance !
            </h4>
            <p className="text-sm text-zinc-600">
              Votre CA est en hausse de 18% ce mois-ci. Produit star : Riz Uncle
              Ben's (+35%). Pensez à augmenter votre stock pour capitaliser sur
              cette tendance.
            </p>
          </div>
        </div>

        {/* Warning Alert */}
        <div className="bg-white rounded-xl p-4 border border-yellow-100 shadow-sm flex gap-4">
          <div className="shrink-0">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-sm mb-1">
              Attention - Ruptures de stock
            </h4>
            <p className="text-sm text-zinc-600">
              7 produits sous le seuil d'alerte. Réapprovisionner rapidement :
              Riz Uncle Ben's, Huile Azur, Savon Camay. Perte potentielle :
              450,000 FCFA.
            </p>
          </div>
        </div>

        {/* Info/Critical Alert */}
        <div className="bg-white rounded-xl p-4 border border-orange-100 shadow-sm flex gap-4">
          <div className="shrink-0">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertOctagon className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-sm mb-1">
              Créances élevées
            </h4>
            <p className="text-sm text-zinc-600">
              12 factures impayées totalisant 845,000 FCFA. Clients à relancer :
              Madame Fotso (250K), Monsieur Kamga (180K), Entreprise Xyz (150K).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
