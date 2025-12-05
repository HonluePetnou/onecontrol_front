import { AuthLayout } from "@/components/auth/AuthLayout";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="mb-10 text-center lg:text-left">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour à la connexion
        </Link>
        <h2 className="text-3xl font-bold text-zinc-900 mb-3 tracking-tight">
          Mot de passe oublié ?
        </h2>
        <p className="text-zinc-500 text-base">
          Entrez votre adresse e-mail et nous vous enverrons un code de
          vérification.
        </p>
      </div>

      <form className="space-y-5">
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-zinc-700"
          >
            Adresse e-mail
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <input
              type="email"
              id="email"
              className="block w-full pl-10 pr-3 py-3 border border-zinc-200 rounded-xl bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
              placeholder="exemple@entreprise.com"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-600/20 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Envoyer le code
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-zinc-500">
        Vous recevrez un code de vérification à 6 chiffres par e-mail.
      </p>
    </AuthLayout>
  );
}
