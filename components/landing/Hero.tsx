import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-linear-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Pilotez votre entreprise avec{" "}
            <span className="text-[#22D3EE]">sérénité</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
            La solution tout-en-un pour gérer vos finances, vos opérations et
            vos équipes. Simple, puissant et conçu pour votre croissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/register"
              className="bg-[#22D3EE] hover:bg-[#22D3EE]/90 text-[#1E3A8A] px-8 py-3 rounded-lg text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Essayer gratuitement
            </Link>
            <Link
              href="#demo"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all backdrop-blur-sm"
            >
              Découvrir
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Aucune carte requise
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Annulation à tout moment
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
          <div className="relative rounded-xl bg-white/10 p-2 backdrop-blur-sm ring-1 ring-white/20 shadow-2xl animate-float">
            <div className="relative rounded-lg bg-zinc-900 shadow-2xl overflow-hidden aspect-16/10">
              {/* Placeholder for the dashboard screenshot */}
              <Image
                src="/blackscreen.png"
                alt="Dashboard Interface"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Elements */}

            {/* Revenue Card - Top Right */}
            <div className="absolute -top-12 -right-8 bg-white p-4 rounded-xl shadow-xl border border-zinc-100 animate-float-delayed hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Revenus</p>
                  <p className="text-sm font-bold text-zinc-900">+24.5%</p>
                </div>
              </div>
              <div className="w-32 h-1 bg-zinc-100 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* New User Notification - Bottom Left */}
            <div className="absolute -bottom-8 -left-8 bg-white p-3 rounded-xl shadow-xl border border-zinc-100 animate-float-slow hidden sm:flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  JD
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  Nouveau client
                </p>
                <p className="text-xs text-zinc-500">Il y a 2 min</p>
              </div>
            </div>

            {/* Success Badge - Right Middle */}
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-xl border border-zinc-100 animate-float hidden lg:flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-zinc-900">
                Système actif
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/30 blur-3xl"></div>
      </div>
    </div>
  );
}
