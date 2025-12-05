import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag, UserPlus, Rocket } from "lucide-react";

export default function SimulationsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Simulations
        </h1>
        <p className="text-gray-500">
          Outils d'aide à la décision pour votre entreprise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-violet-100/50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <Tag className="w-5 h-5" />
              </div>
              Simulateur de Prix
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Testez l'impact d'un changement de prix sur le CA et les volumes.
            </p>
            <Button
              asChild
              className="w-full bg-violet-600 hover:bg-violet-700 text-white shadow-sm"
            >
              <Link href="/dashboard/simulations/pricing">
                Ouvrir le simulateur
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-indigo-100/50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <UserPlus className="w-5 h-5" />
              </div>
              Simulateur d'Embauche
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Calculez le coût réel d'un poste et le CA nécessaire pour le
              rentabiliser.
            </p>
            <Button
              asChild
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
            >
              <Link href="/dashboard/simulations/hiring">
                Ouvrir le simulateur
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-fuchsia-100/50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
                <Rocket className="w-5 h-5" />
              </div>
              Simulateur de Lancement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Évaluez la rentabilité d'un nouveau produit avant de vous lancer.
            </p>
            <Button
              asChild
              className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-sm"
            >
              <Link href="/dashboard/simulations/launch">
                Ouvrir le simulateur
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
