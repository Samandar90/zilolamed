"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Baby } from "lucide-react";
import type { Doctor } from "@/lib/data/doctors";
import { asset } from "@/lib/asset";

export function DoctorCard({ doctor, index = 0 }: { doctor: Doctor; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/vrachi/${doctor.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-teal-500/30 hover:shadow-float"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-mist-100 to-mist-200">
          <Image
            src={asset(doctor.image)}
            alt={doctor.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            {doctor.category && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.68rem] font-semibold text-ink-800 shadow-sm backdrop-blur">
                <Award className="h-3.5 w-3.5 text-teal-600" /> {doctor.category.replace("Врач ", "")}
              </span>
            )}
            {doctor.forKids && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.68rem] font-semibold text-ink-800 shadow-sm backdrop-blur">
                <Baby className="h-3.5 w-3.5 text-teal-600" /> Детский приём
              </span>
            )}
          </div>
          <div className="absolute bottom-4 right-4 rounded-full bg-ink-900/85 px-3 py-1 text-[0.68rem] font-semibold text-white backdrop-blur">
            стаж {doctor.experience} лет
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-teal-600">
            {doctor.primary}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-ink-900 transition-colors group-hover:text-teal-700">
            {doctor.name}
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {doctor.specialties.slice(0, 3).map((s) => (
              <span key={s} className="rounded-full bg-mist-100 px-2.5 py-0.5 text-xs font-medium text-ink-700">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between pt-5">
            <span className="text-sm font-medium text-teal-600">Записаться</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-800 transition-all duration-300 group-hover:border-transparent group-hover:bg-ink-900 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
