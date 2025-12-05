"use client";

import { useState, useEffect } from "react";

export interface DashboardData {
  healthScore: number;
  kpis: {
    revenue: { value: string; trend: number };
    cashFlow: { value: string; trend: number };
    margin: { value: string; trend: number };
    growth: { value: string; trend: number };
  };
  alerts: {
    id: string;
    level: "critical" | "warning" | "info";
    message: string;
    date: string;
  }[];
  charts: {
    revenue: { name: string; value: number }[];
    topProducts: { name: string; value: number }[];
    cashBurn: { name: string; income: number; expense: number }[];
    clientDistribution: { name: string; value: number }[];
  };
}

const MOCK_DATA: DashboardData = {
  healthScore: 78,
  kpis: {
    revenue: { value: "12.5M FCFA", trend: 12 },
    cashFlow: { value: "3.2M FCFA", trend: -5 },
    margin: { value: "24%", trend: 2 },
    growth: { value: "18%", trend: 5 },
  },
  alerts: [
    {
      id: "1",
      level: "critical",
      message: "Stock critique sur 'Riz Parfumé 25kg'",
      date: "Il y a 2h",
    },
    {
      id: "2",
      level: "warning",
      message: "Facture #4023 en retard de paiement (15j)",
      date: "Il y a 5h",
    },
    {
      id: "3",
      level: "info",
      message: "Nouvelle commande importante client 'Hôtel Akwa'",
      date: "Hier",
    },
  ],
  charts: {
    revenue: [
      { name: "Jan", value: 4000 },
      { name: "Fév", value: 3000 },
      { name: "Mar", value: 5000 },
      { name: "Avr", value: 4500 },
      { name: "Mai", value: 6000 },
      { name: "Juin", value: 5500 },
      { name: "Juil", value: 7000 },
      { name: "Août", value: 6500 },
      { name: "Sep", value: 8000 },
      { name: "Oct", value: 7500 },
      { name: "Nov", value: 9000 },
      { name: "Déc", value: 10000 },
    ],
    topProducts: [
      { name: "Riz", value: 4000 },
      { name: "Huile", value: 3000 },
      { name: "Sucre", value: 2000 },
      { name: "Farine", value: 2780 },
      { name: "Savon", value: 1890 },
    ],
    cashBurn: [
      { name: "S1", income: 4000, expense: 2400 },
      { name: "S2", income: 3000, expense: 1398 },
      { name: "S3", income: 2000, expense: 9800 },
      { name: "S4", income: 2780, expense: 3908 },
    ],
    clientDistribution: [
      { name: "B2B", value: 400 },
      { name: "B2C", value: 300 },
      { name: "Partenaires", value: 300 },
    ],
  },
};

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setData(MOCK_DATA);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
}
