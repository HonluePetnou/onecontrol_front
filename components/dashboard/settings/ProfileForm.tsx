"use client";

import {
  Camera,
  Save,
  Mail,
  Phone,
  Shield,
  Bell,
  Moon,
  Globe,
} from "lucide-react";
import { clsx } from "clsx";
import { useState } from "react";

export function ProfileForm() {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="space-y-6">
      {/* Identity Section */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Identité</h2>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-sm">
              JD
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full border border-gray-200 shadow-sm text-gray-500 hover:text-blue-600 transition-colors">
              <Camera className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-gray-900">Jean Dupont</h3>
            <p className="text-sm text-gray-500">Gérant • OneControl Admin</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-900">Coordonnées</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              defaultValue="jean.dupont@email.com"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <input
              type="tel"
              defaultValue="+237 655 123 456"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
}
