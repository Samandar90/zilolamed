import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Check, CalendarCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/ui/book-button";
import { checkups } from "@/lib/data/checkups";
import { asset } from "@/lib/asset";

export function Checkups() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Программы Check-up"
            title={<>Проверьте здоровье<br className="hidden sm:block" /> за один визит.</>}
            description="Комплексные программы обследования организма: консультации, анализы и диагностика в одном пакете — для взрослых и детей."
          />
          <Link
            href="/uslugi#checkup"
            className="group hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink-900 lg:inline-flex"
          >
            Все программы
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-all group-hover:bg-ink-900 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {checkups.slice(0, 6).map((c) => (
            <StaggerItem key={c.slug}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-teal-500/30 hover:shadow-float">
                <Link href="/uslugi#checkup" aria-label={`Подробнее: ${c.name}`} className="absolute inset-0 z-10" />
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={asset(c.image)}
                    alt={c.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-800 backdrop-blur">
                    {c.audience}
                  </span>
                  <span className="absolute bottom-4 left-4 font-display text-lg font-semibold text-white">
                    {c.price}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-ink-900 transition-colors group-hover:text-teal-700">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.short}</p>
                  <ul className="mt-4 space-y-1.5">
                    {c.includes.slice(0, 3).map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-ink-700">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" /> {it}
                      </li>
                    ))}
                  </ul>
                  <div className="relative z-20 mt-auto pt-5">
                    <BookButton
                      prefill={{ note: `Программа check-up: ${c.name}`, source: "checkups" }}
                      size="sm"
                      variant="primary"
                      className="w-full"
                    >
                      <CalendarCheck className="h-4 w-4" /> Записаться
                    </BookButton>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Button href="/uslugi#checkup" variant="primary" size="lg">
            Все программы check-up
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
