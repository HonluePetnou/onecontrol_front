"use client";

import { MoreHorizontal, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { clsx } from "clsx";

const transactions = [
  {
    id: "ORD-001",
    client: "Mme. Kouassi",
    amount: "150,000 FCFA",
    status: "Payé",
    date: "Aujourd'hui, 14:30",
    type: "income",
  },
  {
    id: "ORD-002",
    client: "Supermarché Bon Prix",
    amount: "850,000 FCFA",
    status: "En attente",
    date: "Aujourd'hui, 11:15",
    type: "income",
  },
  {
    id: "EXP-045",
    client: "Fournisseur Riz",
    amount: "2,400,000 FCFA",
    status: "Payé",
    date: "Hier, 16:45",
    type: "expense",
  },
  {
    id: "ORD-003",
    client: "M. Diallo",
    amount: "45,000 FCFA",
    status: "Payé",
    date: "Hier, 09:20",
    type: "income",
  },
  {
    id: "EXP-046",
    client: "Facture Électricité",
    amount: "125,000 FCFA",
    status: "En retard",
    date: "01 Déc, 10:00",
    type: "expense",
  },
];

export function RecentTransactions() {
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
        <h3 className="text-lg font-bold text-zinc-900">
          Transactions Récentes
        </h3>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
          Voir tout
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 text-zinc-500 font-medium">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Client / Libellé</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Montant</th>
              <th className="px-6 py-3">Statut</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-zinc-900">{tx.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={clsx(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        tx.type === "income"
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-red-100 text-red-600"
                      )}
                    >
                      {tx.type === "income" ? (
                        <ArrowDownLeft className="w-4 h-4" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4" />
                      )}
                    </div>
                    <span className="font-medium text-zinc-700">
                      {tx.client}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-zinc-500">{tx.date}</td>
                <td
                  className={clsx(
                    "px-6 py-4 font-bold",
                    tx.type === "income" ? "text-emerald-600" : "text-zinc-900"
                  )}
                >
                  {tx.type === "income" ? "+" : "-"}
                  {tx.amount}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={clsx(
                      "px-2.5 py-1 rounded-full text-xs font-medium border",
                      tx.status === "Payé" &&
                        "bg-emerald-50 text-emerald-700 border-emerald-100",
                      tx.status === "En attente" &&
                        "bg-amber-50 text-amber-700 border-amber-100",
                      tx.status === "En retard" &&
                        "bg-red-50 text-red-700 border-red-100"
                    )}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-zinc-400 hover:text-zinc-600 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
