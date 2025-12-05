import Image from "next/image";

const testimonials = [
  {
    content:
      "OneControl a révolutionné notre façon de gérer nos projets. L'interface est intuitive et le support est excellent. Nous avons gagné 15h par semaine.",
    author: "Sophie Martin",
    role: "CEO, TechStart",
    initials: "SM",
    color: "bg-blue-600",
  },
  {
    content:
      "Enfin un outil qui regroupe tout ce dont j'ai besoin. Les rapports automatiques me font gagner un temps précieux sur mes analyses mensuelles.",
    author: "Thomas Dubois",
    role: "Directeur Financier, InnovateCorp",
    initials: "TD",
    color: "bg-indigo-600",
  },
  {
    content:
      "La simplicité d'utilisation est bluffante. Mon équipe l'a adopté en moins d'une semaine. Le ROI a été immédiat.",
    author: "Marie Laurent",
    role: "Chef de Projet, Digital Solutions",
    initials: "ML",
    color: "bg-cyan-600",
  },
];

export function Testimonials() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Ce qu'ils disent de nous
          </h2>
          <p className="text-lg text-zinc-600">
            Découvrez les témoignages de nos clients satisfaits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${testimonial.color}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-zinc-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
