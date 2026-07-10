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
        <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto p-4 py-8 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink-950/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-float"
          >
            <div className="relative overflow-hidden bg-ink-950 px-7 pb-8 pt-7 text-white sm:px-10 sm:pt-9">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />
              <div
                className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[28rem] -translate-x-1/2 opacity-60 blur-[90px]"
                style={{ background: "radial-gradient(circle, rgba(20,184,166,0.55), transparent 65%)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-24 right-0 h-56 w-56 opacity-40 blur-[100px]"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.5), transparent 60%)" }}
              />

              <button
                onClick={onClose}
                aria-label="Закрыть"
                className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora text-white shadow-[0_10px_30px_-10px_rgba(6,182,212,0.7)]">
                  <CalendarCheck className="h-6 w-6" />
                </span>
                <h2 id="booking-modal-title" className="mt-4 font-display text-2xl font-semibold sm:text-[1.7rem]">
                  Запись на приём
                </h2>
                <p className="mt-1.5 max-w-sm text-sm text-white/55">
                  Оставьте заявку — администратор перезвонит и подберёт удобное время. Приём возможен уже в день обращения.
                </p>
              </div>
            </div>

            <div className="max-h-[65vh] overflow-y-auto px-7 py-7 sm:px-10 sm:py-8">
              <AppointmentForm
                defaultSpecialty={prefill?.specialty}
                defaultMessage={prefill?.note}
                doctor={prefill?.doctor}
                onSuccess={() => setTimeout(onClose, 1800)}
              />

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-6 text-sm text-muted">
                <span className="text-xs uppercase tracking-[0.14em] text-muted/70">Или напрямую</span>
                <a href={company.phones[0].href} className="inline-flex items-center gap-1.5 font-medium text-ink-800 hover:text-teal-600">
                  <Phone className="h-4 w-4 text-teal-500" /> {company.phones[0].value}
                </a>
                <a
                  href={company.social.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-ink-800 hover:text-teal-600"
                >
                  <Send className="h-4 w-4 text-teal-500" /> Telegram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
