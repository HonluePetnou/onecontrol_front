import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, UploadCloud, Download, PieChart } from "lucide-react";

export default function DataPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Données
        </h1>
        <p className="text-gray-500">
          Vue d'overview et gestion de vos datasets
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-violet-100/50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <PieChart className="w-5 h-5" />
              </div>
              Ventes
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm text-gray-500">
              Dernier import il y a 2 jours
            </p>
            <div className="flex gap-2 w-full">
              <Button
                variant="outline"
                className="flex-1 border-gray-200 hover:bg-gray-50"
              >
                Explorer
              </Button>
              <Button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white">
                Ouvrir
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-indigo-100/50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Database className="w-5 h-5" />
              </div>
              Clients
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm text-gray-500">124 actifs</p>
            <div className="flex gap-2 w-full">
              <Button
                variant="outline"
                className="flex-1 border-gray-200 hover:bg-gray-50"
              >
                Exporter
              </Button>
              <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
                Ouvrir
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-emerald-100/50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Database className="w-5 h-5" />
              </div>
              Produits
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm text-gray-500">512 références</p>
            <div className="flex gap-2 w-full">
              <Button
                variant="outline"
                className="flex-1 border-gray-200 hover:bg-gray-50"
              >
                Exporter
              </Button>
              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                Ouvrir
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-sm bg-amber-100/50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Database className="w-5 h-5" />
              </div>
              Fournisseurs
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm text-gray-500">32 partenaires</p>
            <div className="flex gap-2 w-full">
              <Button
                variant="outline"
                className="flex-1 border-gray-200 hover:bg-gray-50"
              >
                Exporter
              </Button>
              <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white">
                Ouvrir
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border border-gray-100 shadow-sm">
        <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-gray-100">
              <UploadCloud className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Importer des données
              </h3>
              <p className="text-sm text-gray-500">
                Supporte CSV, Excel et JSON
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              className="flex-1 md:flex-none border-gray-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Modèle CSV
            </Button>
            <Button className="flex-1 md:flex-none bg-gray-900 hover:bg-black text-white">
              Importer un fichier
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
