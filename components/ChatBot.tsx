"use client";

import { useState, useRef, useEffect } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "bot" | "user";
  text: string;
}

const QUESTIONS = [
  "👋 Hi! I'm the DivineeSoft assistant. What are you building?",
  "Great! What's your rough timeline? (ASAP / 1–3 months / 3–6 months)",
  "What's your budget range? ($5k–$15k / $15k–$50k / $50k+)",
  "What's your email or WhatsApp so we can follow up?",
];

export default function AskWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: QUESTIONS[0] },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(1);
  const [finished, setFinished] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    const newMessages = [...messages, userMsg];
    setInput("");

    if (step < QUESTIONS.length) {
      const botMsg: Message = { role: "bot", text: QUESTIONS[step] };
      setMessages([...newMessages, botMsg]);
      setStep((s) => s + 1);
    } else {
      setMessages([
        ...newMessages,
        {
          role: "bot",
          text: "Thanks! 🎉 Our team will reach out within 24 hours. You can also WhatsApp us directly at +92 314 6256754.",
        },
      ]);
      setFinished(true);
    }
  };

  return (
    <>
      {/* Bubble trigger */}
      <button
        onClick={() => setOpen((p) => !p)}
        aria-label="Ask DivineeSoft"
        className="fixed bottom-24 right-6 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-40 right-6 z-40 w-80 sm:w-96 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white text-sm">Ask DivineeSoft</div>
                <div className="text-[10px] text-white/70">Typically replies in minutes</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-56 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${msg.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            {!finished ? (
              <div className="border-t border-border p-3 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type your answer…"
                  className="flex-1 rounded-xl bg-muted border border-border px-3 py-2 text-sm outline-none focus:border-primary transition-colors"
                />
                <button
                  onClick={send}
                  disabled={!input.trim()}
                  className="rounded-xl bg-primary text-white px-3 py-2 hover:bg-primary/90 disabled:opacity-40 transition-colors"
                  aria-label="Send"
                >
                  <Send size={16} />
                </button>
              </div>
            ) : (
              <div className="border-t border-border p-4 text-center">
                <a
                  href="https://wa.me/+923146256754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Continue on WhatsApp →
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
