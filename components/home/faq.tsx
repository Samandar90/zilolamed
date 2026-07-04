"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/data/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-mist-50/70 py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Вопросы и ответы"
            title={<>Всё, что важно<br className="hidden sm:block" /> знать перед приёмом.</>}
            description="Собрали ответы на частые вопросы пациентов. Не нашли нужного — просто позвоните нам, и мы всё подскажем."
          />

          <div className="divide-y divide-line rounded-3xl border border-line bg-white">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-medium text-ink-900">{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-ink-900 text-white" : "text-ink-800"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
