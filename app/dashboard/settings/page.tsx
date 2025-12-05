import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Building2, Link2, Bell, Shield, CreditCard } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-6xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Paramètres
        </h1>
        <p className="text-gray-500">
          Gérez votre profil, votre entreprise et vos préférences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-violet-100/50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <User className="w-5 h-5" />
              </div>
              Mon profil
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Informations personnelles, email et téléphone
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full border-gray-200 hover:bg-gray-50"
            >
              <Link href="/dashboard/settings/profile">Gérer le profil</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-indigo-100/50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              Entreprise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Détails de l'entreprise et préférences
            </p>
            <Button
              variant="outline"
              className="w-full border-gray-200 hover:bg-gray-50"
            >
              Configurer
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-red-100/50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              Sécurité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Mot de passe, 2FA et sessions
            </p>
            <Button
              variant="outline"
              className="w-full border-gray-200 hover:bg-gray-50"
            >
              Gérer
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
