"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useClickOutside } from "@/hooks/useClickOutside";
import { clsx } from "clsx";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour 👋 Comment puis-je vous aider aujourd'hui ?",
    },
  ]);
  const [input, setInput] = useState("");
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false), open);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    // TODO: intégrer appel API AI ici et pousser la réponse dans messages
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "J'ai reçu votre message. Nous pouvons connecter le backend AI ensuite.",
        },
      ]);
    }, 300);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={ref}>
      {open && (
        <Card className="w-[380px] mb-4 shadow-2xl border-0 ring-1 ring-black/5 rounded-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200 bg-white">
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Assistant OneControl</h3>
                <p className="text-xs text-blue-100">
                  Toujours là pour vous aider
                </p>
              </div>
            </div>
          </div>

          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4 bg-gray-50/50 space-y-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={clsx(
                    "flex w-full",
                    m.role === "assistant" ? "justify-start" : "justify-end"
                  )}
                >
                  <div
                    className={clsx(
                      "max-w-[80%] px-4 py-2.5 rounded-2xl text-sm shadow-sm",
                      m.role === "assistant"
                        ? "bg-white text-gray-700 rounded-tl-none border border-gray-100"
                        : "bg-blue-600 text-white rounded-tr-none"
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  aria-label="Saisir un message"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  className="flex-1 h-10 rounded-full border border-gray-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50 focus:bg-white transition-all"
                  placeholder="Posez une question..."
                />
                <Button
                  aria-label="Envoyer le message"
                  onClick={send}
                  className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 p-0 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat AI"}
        onClick={() => setOpen(!open)}
        className={clsx(
          "rounded-full w-14 h-14 shadow-xl transition-all duration-300 hover:scale-105",
          open
            ? "bg-gray-900 hover:bg-gray-800 rotate-90"
            : "bg-blue-600 hover:bg-blue-700"
        )}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </Button>
    </div>
  );
}
