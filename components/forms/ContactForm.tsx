"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const requestTypes = [
  { value: "consulenza", label: "Consulenza e-commerce" },
  { value: "formazione", label: "Formazione aziendale" },
  { value: "docenza", label: "Docenza" },
  { value: "corso", label: "Corso / Workshop" },
  { value: "evento", label: "Evento / Intervento" },
  { value: "collaborazione", label: "Collaborazione" },
  { value: "altro", label: "Altro" },
];

const inputClasses =
  "w-full rounded-xl bg-ink-800 border border-ink-700 px-4 py-3 text-paper-50 placeholder:text-paper-500 text-sm focus:outline-none focus:border-celeste-500 transition-colors";

export function ContactForm() {
  const [type, setType] = useState("consulenza");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const showEventFields = type === "docenza" || type === "evento" || type === "corso";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, consent: formData.get("consent") === "on" }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Errore durante l'invio.");
      }

      setStatus("success");
      form.reset();
      setType("consulenza");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Errore durante l'invio.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-celeste-500/40 bg-celeste-500/10 p-10 text-center"
      >
        <div className="w-12 h-12 rounded-full bg-celeste-500 flex items-center justify-center mx-auto mb-5">
          <Check size={20} className="text-ink-900" strokeWidth={2.5} />
        </div>
        <h3 className="text-xl font-medium text-paper-50 mb-2">Messaggio inviato.</h3>
        <p className="text-paper-400 text-sm leading-relaxed max-w-sm mx-auto">
          Grazie per avermi scritto. Rispondo personalmente in 1-2 giorni lavorativi.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="block text-paper-300 text-xs font-mono uppercase tracking-[0.1em] mb-3">
          Tipo di richiesta
        </label>
        <div className="flex flex-wrap gap-2">
          {requestTypes.map((rt) => (
            <button
              key={rt.value}
              type="button"
              onClick={() => setType(rt.value)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-medium border transition-colors duration-200",
                type === rt.value
                  ? "bg-celeste-500 border-celeste-500 text-ink-900"
                  : "bg-transparent border-ink-700 text-paper-300 hover:border-ink-600"
              )}
            >
              {rt.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="type" value={type} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-paper-300 text-xs font-mono uppercase tracking-[0.1em] mb-2">
            Nome e cognome *
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="block text-paper-300 text-xs font-mono uppercase tracking-[0.1em] mb-2">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-paper-300 text-xs font-mono uppercase tracking-[0.1em] mb-2">
            Azienda
          </label>
          <input id="company" name="company" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-paper-300 text-xs font-mono uppercase tracking-[0.1em] mb-2">
            Telefono
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
      </div>

      <AnimatePresence>
        {showEventFields && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid sm:grid-cols-2 gap-5 pt-1">
              <div>
                <label htmlFor="organization" className="block text-paper-300 text-xs font-mono uppercase tracking-[0.1em] mb-2">
                  Ente / Organizzazione
                </label>
                <input id="organization" name="organization" type="text" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="eventLocation" className="block text-paper-300 text-xs font-mono uppercase tracking-[0.1em] mb-2">
                  Luogo
                </label>
                <input id="eventLocation" name="eventLocation" type="text" className={inputClasses} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <label htmlFor="message" className="block text-paper-300 text-xs font-mono uppercase tracking-[0.1em] mb-2">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClasses, "resize-none")}
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 w-4 h-4 rounded border-ink-600 bg-ink-800 accent-celeste-500"
        />
        <span className="text-paper-400 text-xs leading-relaxed">
          Ho letto l&apos;informativa privacy e acconsento al trattamento dei miei dati
          per essere ricontattato. *
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-celeste-500 hover:bg-celeste-400 text-ink-900 font-medium px-6 py-3 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Invio in corso…
          </>
        ) : (
          "Invia messaggio"
        )}
      </button>
    </form>
  );
}
