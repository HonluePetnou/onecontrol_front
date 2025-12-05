"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Text */}
        <h1 className="text-[150px] sm:text-[200px] font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 leading-none select-none animate-in zoom-in duration-700">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          Oups ! Cette page s'est égarée.
        </h2>
        <p className="text-zinc-500 text-lg mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Il semblerait que vous ayez pris un chemin de traverse. Ne vous
          inquiétez pas, même les meilleurs explorateurs se perdent parfois.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-700 border border-zinc-200 rounded-xl font-semibold hover:bg-zinc-50 transition-all hover:border-zinc-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Page précédente
          </button>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/4 left-10 sm:left-20 animate-bounce duration-[3000ms]">
        <div className="w-16 h-16 bg-yellow-100 rounded-2xl rotate-12 flex items-center justify-center text-3xl shadow-sm">
          🤔
        </div>
      </div>
      <div className="absolute bottom-1/4 right-10 sm:right-20 animate-bounce duration-[4000ms]">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl -rotate-12 flex items-center justify-center text-3xl shadow-sm">
          🧭
        </div>
      </div>
    </div>
  );
}
