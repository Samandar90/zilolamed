import Link from "next/link";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { BookButton } from "@/components/ui/book-button";
import { specialties } from "@/lib/data/specialties";

export function Specialties() {
  return (
    <section className="relative overflow-hidden bg-mist-50/70 py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Направления"
            title={<>Медицинская помощь<br className="hidden sm:block" /> по всем направлениям.</>}
            description="Одиннадцать направлений для взрослых и детей — от первичного приёма терапевта до узкой специализированной помощи."
          />
          <Link
            href="/uslugi"
            className="group hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink-900 lg:inline-flex"
          >
            Все услуги
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-all group-hover:bg-ink-900 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((c) => (
            <StaggerItem key={c.slug}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal-500/30 hover:shadow-float">
                <Link href="/uslugi" aria-label={`Подробнее: ${c.name}`} className="absolute inset-0 z-10" />
                <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-40 bg-aurora opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15" />
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-900 text-white transition-transform duration-500 group-hover:scale-110">
                    <c.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-ink-900">{c.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{c.short}</p>
                </div>
                <div className="relative z-20 mt-8 flex items-center justify-between gap-2">
                  <Link href="/uslugi" className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600">
                    Подробнее
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <BookButton
                    prefill={{ specialty: c.name, source: "specialties" }}
                    size="sm"
                    variant="outline"
                    aria-label={`Записаться: ${c.name}`}
                  >
                    <CalendarCheck className="h-4 w-4" />
                  </BookButton>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
