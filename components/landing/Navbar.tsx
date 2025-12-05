import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
              O
            </div>
            <span className="text-xl font-bold text-[#111827]">OneControl</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#"
                className="text-[#6B7280] hover:text-[#1E3A8A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="#features"
                className="text-[#6B7280] hover:text-[#1E3A8A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Avantages
              </Link>
              <Link
                href="#functionalities"
                className="text-[#6B7280] hover:text-[#1E3A8A] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Fonctionnalités
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-blue-900 hover:text-[#1E40AF] text-sm font-medium transition-colors"
            >
              Se connecter
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg"
            >
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
