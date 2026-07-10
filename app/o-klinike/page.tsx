import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake, ArrowRight, BadgeCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { BookButton } from "@/components/ui/book-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/lib/data/company";
import { timeline } from "@/lib/data/content";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "О клинике",
  description:
    "Zilola Medical — частный лечебно-диагностический центр в Ташкенте с 2011 года. Опытные врачи, современное оборудование, индивидуальный подход к каждому пациенту.",
};

const stats = [
  { v: company.stats.years, s: "", l: "лет опыта" },
  { v: company.stats.doctors, s: "", l: "опытных врачей" },
  { v: company.stats.specialties, s: "", l: "направлений" },
  { v: company.stats.patients, s: "+", l: "пациентов" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "О клинике" }]}
        eyebrow="О нас"
        title={<>Точность и <span className="text-aurora">забота.</span></>}
        description="С 2011 года лечебно-диагностический центр Zilola Medical помогает жителям Ташкента сохранять здоровье — объединяя опытных врачей, современное оборудование и по-настоящему внимательное отношение к каждому пациенту."
      />

      <section className="pt-4">
        <div className="container-x">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-line shadow-card sm:aspect-[21/9]">
              <Image
                src={asset("/img/clinic/clinic.jpg")}
                alt="Клиника Zilola Medical в Ташкенте"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur">
                <p className="font-display text-lg font-semibold text-ink-900">Zilola Medical</p>
                <p className="text-sm text-muted">Мирабадский район, Ташкент</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Zilola Medical — это частный лечебно-диагностический центр, где точная диагностика
                становится основой эффективного лечения. Мы оснастили клинику оборудованием мировых
                брендов, чтобы получать достоверный результат уже на первом приёме.
              </p>
              <p>
                Приём ведут <span className="font-medium text-ink-900">опытные врачи со стажем до 46 лет</span>,
                в том числе специалисты высшей категории по неврологии и гинекологии.
              </p>
              <p>
                Мы предлагаем <span className="font-medium text-ink-900">комплексные программы check-up</span> —
                от базовой проверки здоровья до профильной диагностики, чтобы за один визит получить полную
                картину состояния организма.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="rounded-3xl border border-line bg-white p-7 text-center shadow-card">
                  <div className="font-display text-4xl font-semibold text-ink-900 lg:text-5xl">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <p className="mt-2 text-sm text-muted">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-50/70 py-20 lg:py-28">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {[
            { icon: Target, t: "Миссия", d: "Делать качественную медицинскую помощь доступной — с точной диагностикой и индивидуальным планом лечения для каждого пациента." },
            { icon: Eye, t: "Видение", d: "Быть клиникой, которой семьи Ташкента доверяют здоровье поколениями — за счёт профессионализма и заботы." },
            { icon: HeartHandshake, t: "Ценности", d: "Внимание к пациенту, честность в диагнозе и стоимости, современные методы и бережное отношение к каждому, кто к нам обращается." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-line bg-white p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora text-white">
                  <v.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">{v.t}</h3>
                <p className="mt-3 leading-relaxed text-muted">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Наш путь" title="14 лет заботы о здоровье." />
          <div className="mt-14 space-y-0">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={(i % 3) * 0.05}>
                <div className="grid gap-6 border-t border-line py-8 lg:grid-cols-[160px_1fr]">
                  <div className="font-display text-4xl font-semibold text-aurora">{t.year}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-ink-900">{t.title}</h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-muted">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <BookButton prefill={{ source: "o-klinike" }} variant="dark" size="lg">
              Записаться на приём <ArrowRight className="h-5 w-5" />
            </BookButton>
          </div>
        </div>
      </section>

      {/* License */}
      <section className="bg-mist-50/70 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">
            <Reveal>
              <div>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-current opacity-60" />
                  Лицензия и доверие
                </span>
                <h2 className="mt-4 max-w-xl text-balance text-3xl leading-[1.1] text-ink-900 sm:text-4xl">
                  Официальная лицензированная деятельность.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                  Zilola Medical ведёт медицинскую деятельность на основании официальной лицензии.
                  Мы работаем открыто и несём ответственность за здоровье каждого пациента.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Лицензированная медицинская практика", "Сертифицированные врачи", "Современное оборудование", "Прозрачные цены"].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-ink-800">
                      <BadgeCheck className="h-5 w-5 shrink-0 text-teal-600" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-[1.5rem] border border-line bg-white p-3 shadow-float">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={asset("/img/clinic/license.png")}
                    alt="Лицензия клиники Zilola Medical"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-contain"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
