"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

const caData = [
  { name: "Jan", value: 4000 },
  { name: "Fév", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Avr", value: 4500 },
  { name: "Mai", value: 6000 },
  { name: "Juin", value: 5500 },
];

const productData = [
  { name: "Riz", value: 400 },
  { name: "Huile", value: 300 },
  { name: "Savon", value: 300 },
  { name: "Lait", value: 200 },
];

// Professional Palette: Blue-600 (Primary), Slate-500, Emerald-500, Indigo-500
const COLORS = ["#2563EB", "#64748B", "#10B981", "#6366F1"];

const burnRateData = [
  { name: "Entrées", value: 4000 },
  { name: "Sorties", value: 2400 },
];

const clientData = [
  { name: "VIP", value: 400 },
  { name: "Fidèles", value: 300 },
  { name: "Occas.", value: 300 },
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Evolution du CA */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100/50 shadow-sm shadow-blue-500/5 hover:shadow-blue-500/10 transition-all">
        <h3 className="text-lg font-bold text-zinc-900 mb-1">
          Évolution du CA
        </h3>
        <p className="text-xs text-zinc-500 mb-6">6 derniers mois</p>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={caData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563EB"
                strokeWidth={3}
                dot={{ r: 4, fill: "#2563EB", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top 5 Produits */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100/50 shadow-sm shadow-blue-500/5 hover:shadow-blue-500/10 transition-all">
        <h3 className="text-lg font-bold text-zinc-900 mb-1">Top 5 produits</h3>
        <p className="text-xs text-zinc-500 mb-6">Par chiffre d'affaires</p>
        <div className="h-[250px] w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {productData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Cash Burn Rate */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100/50 shadow-sm shadow-blue-500/5 hover:shadow-blue-500/10 transition-all">
        <h3 className="text-lg font-bold text-zinc-900 mb-1">Cash Burn Rate</h3>
        <p className="text-xs text-zinc-500 mb-6">Entrées vs Sorties</p>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={burnRateData} barSize={40}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
              />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Répartition clients */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100/50 shadow-sm shadow-blue-500/5 hover:shadow-blue-500/10 transition-all">
        <h3 className="text-lg font-bold text-zinc-900 mb-1">
          Répartition clients
        </h3>
        <p className="text-xs text-zinc-500 mb-6">VIP, Fidèles, Occasionnels</p>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={clientData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12 }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2563EB"
                fill="#2563EB"
                fillOpacity={0.1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
