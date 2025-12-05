import Link from "next/link";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-white">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-linear-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB]">
        <div className="relative z-10 flex flex-col justify-between h-full p-16">
          <div>
            <Link href="/" className="flex items-center gap-3 text-white group">
              <div className="w-10 h-10 bg-blue-600 backdrop-blur-md rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                O
              </div>
              <span className="text-2xl font-bold tracking-tight">
                OneControl
              </span>
            </Link>
          </div>

          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
              Pilotez votre entreprise avec{" "}
              <span className="text-[#22D3EE]">sérénité.</span>
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed font-light">
              La solution tout-en-un pour gérer vos finances, vos opérations et
              vos équipes.
            </p>
          </div>

          <div className="text-blue-200/60 text-sm font-medium">
            © 2025 OneControl. Tous droits réservés.
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-400/20 blur-3xl mix-blend-overlay animate-float-slow"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-3xl mix-blend-overlay animate-float-delayed"></div>
          <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-3xl mix-blend-overlay animate-float"></div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-[420px] animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </div>
    </div>
  );
}
