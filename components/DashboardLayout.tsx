"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { Container } from "@/components/Container";
import { FloatingChat } from "@/components/FloatingChat";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar is now static on desktop but we need to handle the mobile toggle state if we want to control it from outside, 
          though Sidebar handles its own state mostly. We pass props just in case. */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out lg:pl-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {/* Removed Container to allow full width control if needed, or we can keep it. 
               Let's keep it simple for now but ensure padding is good. */}
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
        <FloatingChat />
      </div>
    </div>
  );
}
