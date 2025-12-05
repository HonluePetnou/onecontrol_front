"use client";

import { useDashboardData } from "@/hooks/useDashboardData";
import { StatCard } from "@/components/dashboard/StatCard";
import { OverviewChart } from "@/components/dashboard/OverviewChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import {
  DollarSign,
  Wallet,
  Percent,
  Activity,
  ArrowUpRight,
  Users,
  CreditCard,
} from "lucide-react";

export default function DashboardPage() {
  const { data, loading } = useDashboardData();

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>

        <p className="text-gray-500">
          Vue d'ensemble de vos performances et activités récentes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="CA Mensuel"
          value={data.kpis.revenue.value}
          trend={`${Math.abs(data.kpis.revenue.trend)}% vs mois dernier`}
          trendUp={data.kpis.revenue.trend >= 0}
          icon={DollarSign}
        />
        <StatCard
          title="Trésorerie"
          value={data.kpis.cashFlow.value}
          trend={`${Math.abs(data.kpis.cashFlow.trend)}% vs mois dernier`}
          trendUp={data.kpis.cashFlow.trend >= 0}
          icon={Wallet}
        />
        <StatCard
          title="Marge Moyenne"
          value={data.kpis.margin.value}
          trend={`${Math.abs(data.kpis.margin.trend)}% vs mois dernier`}
          trendUp={data.kpis.margin.trend >= 0}
          icon={Percent}
        />
        <StatCard
          title="Croissance"
          value={data.kpis.growth.value}
          trend={`${Math.abs(data.kpis.growth.trend)}% vs mois dernier`}
          trendUp={data.kpis.growth.trend >= 0}
          icon={Activity}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <OverviewChart />
        </div>
        <div className="col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
