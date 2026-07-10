"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/ui/book-button";
import { company } from "@/lib/data/company";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-lines mask-fade-b opacity-[0.5]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-60 blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.4), transparent 60%)", animation: "float-orb 20s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[6%] top-[8%] h-[28rem] w-[28rem] rounded-full opacity-50 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent 62%)", animation: "float-orb 26s ease-in-out infinite reverse" }}
        />
      </div>

      <div className="container-x relative">
        <motion.div style={{ y, opacity }} className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-800 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-teal-500" />
            <span>Частная клиника в Ташкенте · с {company.founded} года</span>
          </motion.div>

          <h1 className="mt-7 text-balance text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
            {"Точная диагностика.".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {w}&nbsp;
              </motion.span>
            ))}
            <br className="hidden sm:block" />
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="text-aurora inline-block"
            >
              Внимательная забота.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            Лечебно-диагностический центр Zilola Medical объединяет опытных врачей и
            оборудование мировых брендов, чтобы поставить точный диагноз и составить
            индивидуальный план лечения для каждого пациента.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <BookButton prefill={{ source: "hero" }} size="lg" variant="dark">
              Записаться на приём
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </BookButton>
            <Button href="/vrachi" size="lg" variant="outline">
              Наши врачи
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-500" /> Врачи высшей категории</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-teal-500" /> Приём Пн–Сб · 08:00–17:00</span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <HeroConsole />
        </motion.div>
      </div>
    </section>
  );
}

function HeroConsole() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-aurora opacity-20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 p-1.5 shadow-float">
        <div className="overflow-hidden rounded-[1.6rem] bg-ink-950">
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/40">
              Диагностика · кабинет 04
            </span>
            <span className="flex items-center gap-1.5 text-[0.7rem] text-teal-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" /> норма
            </span>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-3">
            <Vital label="Пульс" value="72" unit="уд/мин" color="#2dd4bf" wave="ecg" />
            <Vital label="SpO₂" value="98" unit="%" color="#22d3ee" wave="pleth" />
            <Vital label="Давление" value="120/80" unit="мм рт.ст." color="#818cf8" wave="flat" />
          </div>

          <div className="grid grid-cols-2 gap-4 px-6 pb-6 sm:grid-cols-4">
            {[
              { k: "Дыхание", v: "16 /мин" },
              { k: "Температура", v: "36.7 °C" },
              { k: "УЗИ", v: "в клинике" },
              { k: "Анализы", v: "в тот же день" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <p className="text-[0.65rem] uppercase tracking-wide text-white/40">{s.k}</p>
                <p className="mt-1 font-display text-lg text-white">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-16 hidden rounded-2xl border border-line bg-white/90 p-3 shadow-float backdrop-blur sm:block lg:-left-10"
      >
        <p className="text-[0.65rem] uppercase tracking-wide text-muted">Стаж врачей</p>
        <p className="font-display text-sm font-semibold text-ink-900">до 46 лет</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 bottom-16 hidden rounded-2xl border border-line bg-white/90 p-3 shadow-float backdrop-blur sm:block lg:-right-10"
      >
        <p className="text-[0.65rem] uppercase tracking-wide text-muted">Приём</p>
        <p className="font-display text-sm font-semibold text-ink-900">в день обращения</p>
      </motion.div>
    </div>
  );
}

function Vital({
  label,
  value,
  unit,
  color,
  wave,
}: {
  label: string;
  value: string;
  unit: string;
  color: string;
  wave: "ecg" | "pleth" | "flat";
}) {
  const paths: Record<string, string> = {
    ecg: "M0 20 h18 l4 -14 5 26 4 -20 3 8 h20 l4 -14 5 26 4 -20 3 8 h20",
    pleth: "M0 20 q6 -16 12 0 t12 0 t12 0 t12 0 t12 0 t12 0",
    flat: "M0 20 h12 l4 -8 4 8 h20 l4 -8 4 8 h40",
  };
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-[0.65rem] uppercase tracking-wide text-white/40">{label}</p>
        <p className="font-display text-xl font-semibold" style={{ color }}>
          {value}
          <span className="ml-1 text-[0.65rem] font-normal text-white/40">{unit}</span>
        </p>
      </div>
      <svg viewBox="0 0 120 40" className="mt-2 h-10 w-full" preserveAspectRatio="none">
        <motion.path
          d={paths[wave]}
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
