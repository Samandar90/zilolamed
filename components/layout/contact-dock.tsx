"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Phone, Send, X } from "lucide-react";
import { company } from "@/lib/data/company";
import { useBooking } from "@/components/providers/booking-provider";

const channels = [
  { label: "Telegram", href: company.social.telegram, icon: Send, color: "bg-[#229ED9]" },
  { label: "Позвонить", href: company.phones[0].href, icon: Phone, color: "bg-ink-900" },
];

export function ContactDock() {
  const [open, setOpen] = useState(false);
  const { open: openBooking } = useBooking();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <>
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 12, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.85 }}
                transition={{ delay: i * 0.05, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <span className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink-900 shadow-card">
                  {c.label}
                </span>
                <span className={`grid h-12 w-12 place-items-center rounded-full text-white shadow-float ${c.color}`}>
                  <c.icon className="h-5 w-5" />
                </span>
              </motion.a>
            ))}
            <motion.button
              key="book"
              onClick={() => {
                setOpen(false);
                openBooking({ source: "contact-dock" });
              }}
              initial={{ opacity: 0, y: 12, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.85 }}
              transition={{ delay: channels.length * 0.05, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink-900 shadow-card">
                Записаться на приём
              </span>
              <span className="btn-sheen relative grid h-12 w-12 place-items-center rounded-full bg-aurora text-white shadow-[0_10px_30px_-10px_rgba(6,182,212,0.7)]">
                <CalendarCheck className="h-5 w-5" />
              </span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact channels"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-aurora text-white shadow-[0_16px_40px_-12px_rgba(6,182,212,0.7)] transition-transform hover:scale-105"
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full bg-teal-400/40"
            style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="relative h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
