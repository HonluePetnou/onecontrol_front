import {
  LayoutDashboard,
  Users,
  TrendingUp,
  Clock,
  Smartphone,
  Headphones,
} from "lucide-react";

const features = [
  {
    name: "Accessible partout",
    description:
      "Accédez à vos données depuis n'importe quel appareil, où que vous soyez. Application web responsive et mobile-friendly.",
    icon: LayoutDashboard,
  },
  {
    name: "Collaboration simplifiée",
    description:
      "Invitez vos collaborateurs et travaillez ensemble en temps réel. Gestion des rôles et permissions avancée.",
    icon: Users,
  },
  {
    name: "Évolutif",
    description:
      "Une solution qui grandit avec votre entreprise, de la startup à la PME. Scaling automatique et illimité.",
    icon: TrendingUp,
  },
  {
    name: "Gain de temps",
    description:
      "Automatisez vos tâches répétitives et gagnez jusqu'à 10 heures par semaine sur votre gestion.",
    icon: Clock,
  },
  {
    name: "Interface intuitive",
    description:
      "Design moderne et épuré. Aucune formation nécessaire, votre équipe est opérationnelle en quelques minutes.",
    icon: Smartphone,
  },
  {
    name: "Support réactif",
    description:
      "Notre équipe d'experts est disponible 7j/7 pour vous accompagner. Réponse garantie en moins de 2h.",
    icon: Headphones,
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Pourquoi choisir OneControl ?
          </h2>
          <p className="text-lg text-zinc-600">
            Plus de 10,000 entreprises nous font confiance pour leur gestion
            quotidienne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                {feature.name}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
