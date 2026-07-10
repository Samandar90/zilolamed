"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star, CalendarCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { BookButton } from "@/components/ui/book-button";
import { testimonials } from "@/lib/data/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const t = testimonials[index];

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Отзывы пациентов" title="Нас выбирают и рекомендуют." align="center" />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <Quote className="mx-auto h-12 w-12 text-teal-500/25" />
          <div className="relative mt-6 min-h-[220px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-teal-500 text-teal-500" />
                  ))}
                </div>
                <p className="text-balance font-display text-2xl font-medium leading-relaxed text-ink-900 sm:text-[1.75rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="font-semibold text-ink-900">{t.author}</p>
                  <p className="text-sm text-muted">{t.org}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-800 transition-all hover:border-transparent hover:bg-ink-900 hover:text-white"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-ink-900" : "w-2 bg-ink-900/20"}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-800 transition-all hover:border-transparent hover:bg-ink-900 hover:text-white"
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-12 flex justify-center">
            <BookButton prefill={{ source: "testimonials" }} variant="outline" size="lg">
              <CalendarCheck className="h-5 w-5" /> Тоже хочу записаться
            </BookButton>
          </div>
        </div>
      </div>
    </section>
  );
}
