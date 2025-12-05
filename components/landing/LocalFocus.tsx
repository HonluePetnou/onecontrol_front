import Image from "next/image";
import { Globe, Users, TrendingUp } from "lucide-react";

export function LocalFocus() {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h3 className="text-cyan-500 font-bold tracking-wide uppercase text-sm mb-2">
              POURQUOI NOUS CHOISIR ?
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
              Conçu par des Africains, pour les Africains.
            </h2>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Nous ne sommes pas juste un autre logiciel. Nous sommes votre
              partenaire de croissance, profondément ancré dans les réalités de
              votre marché.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Globe className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-zinc-900 mb-2">
                    Hyper-localisé
                  </h4>
                  <p className="text-zinc-600 leading-relaxed">
                    Intégrations natives avec les banques, les systèmes fiscaux
                    et les solutions de paiement mobile du continent.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-zinc-900 mb-2">
                    Support Humain
                  </h4>
                  <p className="text-zinc-600 leading-relaxed">
                    Nos équipes sont basées sur le continent, parlent votre
                    langue et comprennent vos défis quotidiens.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-zinc-900 mb-2">
                    Vision Panafricaine
                  </h4>
                  <p className="text-zinc-600 leading-relaxed">
                    Nous facilitons votre expansion régionale grâce à nos outils
                    de conformité multi-pays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="relative rounded-2xl bg-zinc-100 p-4 sm:p-8">
              {/* Placeholder for the dashboard screenshot shown in the image */}
              <div className="relative rounded-xl bg-white shadow-xl overflow-hidden aspect-4/3 border border-zinc-200">
                <Image
                  src="/blackscreen.png"
                  alt="Dashboard Interface"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
