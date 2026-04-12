"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Field {
  id: string;
  label: string;
  type: string;
  accent: string;
  accentBorder: string;
  span?: boolean;
  textarea?: boolean;
}

const fields: Field[] = [
  { id: "name",    label: "Identity / Your Name",          type: "text",  accent: "focus:border-primary",   accentBorder: "bg-primary" },
  { id: "email",   label: "Frequency / Your Email",        type: "email", accent: "focus:border-secondary", accentBorder: "bg-secondary" },
  { id: "message", label: "The Transmission / Your Message", type: "text", accent: "focus:border-tertiary",  accentBorder: "bg-tertiary", span: true, textarea: true },
];

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center gap-4 py-12 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-2xl">check</span>
          </div>
          <p className="text-white font-bold font-headline text-lg">Transmission Sent</p>
          <p className="text-on-surface-variant text-sm font-body">
            I&apos;ll get back to you soon.
          </p>
          <button
            onClick={() => { setSubmitted(false); setValues({ name: "", email: "", message: "" }); }}
            className="mt-2 text-xs text-on-surface-variant hover:text-primary transition-all font-label uppercase tracking-wider"
          >
            Send another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fields.filter((f) => !f.span).map((field) => (
              <div key={field.id} className="relative group">
                {field.textarea ? (
                  <textarea
                    value={values[field.id as keyof typeof values]}
                    onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    placeholder={field.label}
                    rows={4}
                    className={`w-full bg-transparent border-b-2 border-white/10 py-3 text-white text-sm ${field.accent} outline-none transition-all placeholder:text-white/20 font-body resize-none`}
                  />
                ) : (
                  <input
                    type={field.type}
                    value={values[field.id as keyof typeof values]}
                    onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
                    onFocus={() => setFocused(field.id)}
                    onBlur={() => setFocused(null)}
                    placeholder={field.label}
                    className={`w-full bg-transparent border-b-2 border-white/10 py-3 text-white text-sm ${field.accent} outline-none transition-all placeholder:text-white/20 font-body`}
                  />
                )}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] ${field.accentBorder} transition-all duration-500 ${focused === field.id ? "w-full" : "w-0"}`}
                />
              </div>
            ))}
          </div>

          {/* Textarea row */}
          {fields.filter((f) => f.span).map((field) => (
            <div key={field.id} className="relative group">
              <textarea
                value={values[field.id as keyof typeof values]}
                onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
                onFocus={() => setFocused(field.id)}
                onBlur={() => setFocused(null)}
                placeholder={field.label}
                rows={4}
                className={`w-full bg-transparent border-b-2 border-white/10 py-3 text-white text-sm ${field.accent} outline-none transition-all placeholder:text-white/20 font-body resize-none`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] ${field.accentBorder} transition-all duration-500 ${focused === field.id ? "w-full" : "w-0"}`}
              />
            </div>
          ))}

          <button
            type="submit"
            className="group relative px-8 py-3 bg-white text-background font-bold rounded-xl overflow-hidden hover:scale-105 transition-all text-sm font-headline flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Transmit Pulse
              <span className="material-symbols-outlined text-[18px]">send</span>
            </span>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
