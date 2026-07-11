"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Phone, Send, X } from "lucide-react";
import { AppointmentForm } from "@/components/contact/appointment-form";
import { company } from "@/lib/data/company";
import type { BookingPrefill } from "@/components/providers/booking-provider";

export function BookingModal({
  isOpen,
  onClose,
  prefill,
}: {
  isOpen: boolean;
  onClose: () => void;
  prefill?: BookingPrefill;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto p-4 py-8 sm:p-6"
        >
          <div onClick={onClose} className="fixed inset-0 bg-ink-950/70 backdrop-blur-sm" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative my-auto w-full max-w-md overflow-hidden rounded-[1.75rem] bg-white shadow-float"
          >
            <div className="relative overflow-hidden bg-ink-950 px-5 pb-5 pt-5 text-white sm:px-6 sm:pt-6">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />
              <div
                className="pointer-events-none absolute -top-20 left-1/2 h-48 w-[20rem] -translate-x-1/2 opacity-50 blur-[80px]"
                style={{ background: "radial-gradient(circle, rgba(20,184,166,0.55), transparent 65%)" }}
              />

              <button
                onClick={onClose}
                aria-label="Закрыть"
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-aurora text-white shadow-[0_10px_30px_-10px_rgba(6,182,212,0.7)]">
                  <CalendarCheck className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h2 id="booking-modal-title" className="font-display text-lg font-semibold">
                    Запись на приём
                  </h2>
                  <p className="text-xs text-white/50">Перезвоним и подберём удобное время</p>
                </div>
              </div>
            </div>

            <div className="max-h-[75vh] overflow-y-auto px-5 py-5 sm:px-6">
              <AppointmentForm
                defaultSpecialty={prefill?.specialty}
                defaultMessage={prefill?.note}
                doctor={prefill?.doctor}
                source={prefill?.source}
                onSuccess={() => setTimeout(onClose, 1800)}
              />

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-t border-line pt-4 text-xs text-muted">
                <span className="uppercase tracking-[0.14em] text-muted/70">Или напрямую</span>
                <a href={company.phones[0].href} className="inline-flex items-center gap-1.5 font-medium text-ink-800 hover:text-teal-600">
                  <Phone className="h-3.5 w-3.5 text-teal-500" /> {company.phones[0].value}
                </a>
                <a
                  href={company.social.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-ink-800 hover:text-teal-600"
                >
                  <Send className="h-3.5 w-3.5 text-teal-500" /> Telegram
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
