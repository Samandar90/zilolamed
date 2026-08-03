import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  CalendarCheck,
  Check,
  HeartPulse,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { BookButton } from "@/components/ui/book-button";
import { getDoctor } from "@/lib/data/doctors";
import { company } from "@/lib/data/company";
import { asset } from "@/lib/asset";

const siteUrl = "https://zilolamedical.uz";

export const metadata: Metadata = {
  title: "Гинеколог в Ташкенте — врач высшей категории, стаж 21 год",
  description: `Приём гинеколога в Ташкенте: профилактические осмотры, кольпоскопия, УЗИ малого таза, ведение беременности, лечение бесплодия. Врач высшей категории, стаж 21 год. Приём в день обращения. Запись: ${company.phones[0].value}.`,
  alternates: { canonical: `${siteUrl}/ginekologiya/` },
  openGraph: {
    title: "Гинеколог в Ташкенте — Zilola Medical",
    description:
      "Врач высшей категории со стажем 21 год. Осмотры, кольпоскопия, УЗИ малого таза, ведение беременности. Приём в день обращения.",
    url: `${siteUrl}/ginekologiya/`,
  },
};

const services = [
  {
    icon: Stethoscope,
    name: "Профилактический осмотр",
    text: "Регулярный осмотр раз в год — основа женского здоровья. Осмотр, консультация и назначения за один визит.",
  },
  {
    icon: Microscope,
    name: "Кольпоскопия",
    text: "Детальное обследование шейки матки под увеличением — точная ранняя диагностика изменений.",
  },
  {
    icon: HeartPulse,
    name: "УЗИ малого таза",
    text: "Проводится в клинике в день приёма — не нужно ехать в другое место и ждать результат.",
  },
  {
    icon: CalendarCheck,
    name: "Ведение беременности",
    text: "Наблюдение беременности с регулярными осмотрами, УЗИ и анализами в одном месте.",
  },
  {
    icon: BadgeCheck,
    name: "Лечение бесплодия",
    text: "Обследование пары, поиск причины и индивидуальный план лечения женского бесплодия.",
  },
  {
    icon: ShieldCheck,
    name: "Малые вмешательства",
    text: "Амбулаторные гинекологические процедуры — бережно, безболезненно и конфиденциально.",
  },
];

const faq = [
  {
    q: "Сколько стоит приём гинеколога?",
    a: `Стоимость зависит от объёма обследования — уточните по телефону ${company.phones[0].value}, администратор подберёт удобное время и ответит на вопросы о ценах.`,
  },
  {
    q: "Можно ли попасть на приём в день обращения?",
    a: "Да, в большинстве случаев мы принимаем в день обращения. Клиника работает Пн–Сб с 08:00 до 17:00.",
  },
  {
    q: "Можно ли сделать УЗИ малого таза сразу на приёме?",
    a: "Да. УЗИ проводится в клинике на аппаратах экспертного класса, результат вы получаете в тот же день.",
  },
  {
    q: "Как подготовиться к приёму гинеколога?",
    a: "Специальная подготовка обычно не нужна. Возьмите с собой результаты прошлых обследований, если они есть — врач учтёт их при осмотре.",
  },
];

export default function GynecologyPage() {
  const doctor = getDoctor("ismailova-komila")!;

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    image: `${siteUrl}${doctor.image}`,
    medicalSpecialty: "Gynecologic",
    description: doctor.bio,
    url: `${siteUrl}/ginekologiya/`,
    telephone: company.phones[0].value,
    worksFor: {
      "@type": "MedicalClinic",
      name: "Zilola Medical",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressCountry: "UZ",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([physicianSchema, faqSchema]) }}
      />

      <PageHeader
        breadcrumb={[{ label: "Услуги", href: "/uslugi" }, { label: "Гинекология" }]}
        eyebrow="Гинекология"
        title={
          <>
            Гинеколог в <span className="text-aurora">Ташкенте.</span>
          </>
        }
        description="Приём ведёт акушер-гинеколог высшей категории со стажем 21 год. Осмотры, кольпоскопия, УЗИ малого таза и ведение беременности — бережно, конфиденциально и в одном месте."
      />

      <section className="pt-4">
        <div className="container-x grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line shadow-card">
              <Image
                src={asset(doctor.image)}
                alt={`${doctor.name} — гинеколог в Ташкенте`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/25 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-700">
                <Award className="h-3.5 w-3.5" /> {doctor.category}
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900">{doctor.name}</h2>
              <p className="mt-1 text-muted">{doctor.role} · стаж {doctor.experience} год</p>
              <p className="mt-4 max-w-xl text-ink-800">{doctor.bio}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {doctor.focus.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-800">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-500/15 text-teal-600">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <BookButton
                  prefill={{
                    doctor: { name: doctor.name, primary: doctor.primary },
                    source: "Лендинг гинекология",
                  }}
                >
                  Записаться к гинекологу
                </BookButton>
                <a
                  href={`tel:${company.phones[0].value.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors hover:text-teal-600"
                >
                  <Phone className="h-4 w-4" /> {company.phones[0].value}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Что мы делаем"
            title={
              <>
                Полный спектр <span className="text-aurora">женского здоровья.</span>
              </>
            }
            description="От профилактического осмотра до ведения беременности — всё в одной клинике, без очередей и лишних поездок."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Reveal key={s.name}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-aurora text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Вопросы и ответы"
              title={
                <>
                  Частые <span className="text-aurora">вопросы.</span>
                </>
              }
            />
            <div className="mt-8 grid gap-4">
              {faq.map((f) => (
                <Reveal key={f.q}>
                  <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                    <h3 className="font-display font-semibold text-ink-900">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-[2rem] bg-ink-950 p-8 text-white lg:p-12">
              <span className="eyebrow text-teal-300">Запись на приём</span>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                Позаботьтесь о себе — запишитесь сегодня.
              </h2>
              <p className="mt-3 text-white/70">
                Приём Пн–Сб с 08:00 до 17:00, в большинстве случаев — в день обращения. Конфиденциальность гарантируем.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <BookButton
                  prefill={{
                    doctor: { name: doctor.name, primary: doctor.primary },
                    source: "Лендинг гинекология (низ)",
                  }}
                >
                  Записаться на приём
                </BookButton>
                <a
                  href={`tel:${company.phones[0].value.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-teal-300"
                >
                  <Phone className="h-4 w-4" /> {company.phones[0].value}
                </a>
              </div>
              <p className="mt-6 text-sm text-white/50">
                Или посмотрите{" "}
                <Link href="/vrachi/ismailova-komila/" className="underline decoration-white/30 underline-offset-4 hover:text-white">
                  страницу врача
                </Link>{" "}
                и{" "}
                <Link href="/uslugi/" className="underline decoration-white/30 underline-offset-4 hover:text-white">
                  все услуги клиники
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
