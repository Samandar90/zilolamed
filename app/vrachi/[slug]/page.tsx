import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Award,
  Baby,
  Check,
  ChevronRight,
  Phone,
  Send,
  Stethoscope,
  BriefcaseMedical,
  CalendarCheck,
} from "lucide-react";
import { doctors, getDoctor } from "@/lib/data/doctors";
import { company } from "@/lib/data/company";
import { asset } from "@/lib/asset";
import { Aurora } from "@/components/ui/aurora";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { DoctorCard } from "@/components/ui/doctor-card";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) return { title: "Врач не найден" };
  return {
    title: `${doctor.name} — ${doctor.primary}`,
    description: `${doctor.name}, ${doctor.specialties.join(", ")}. Стаж ${doctor.experience} лет. Запись на приём в клинике Zilola Medical, Ташкент.`,
  };
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  const related = doctors.filter((d) => d.slug !== doctor.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: doctor.specialties,
    worksFor: { "@type": "MedicalClinic", name: company.legalName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
        <Aurora />
        <div className="container-x relative">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <Link href="/" className="hover:text-ink-900">Главная</Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            <Link href="/vrachi" className="hover:text-ink-900">Врачи</Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            <span className="text-ink-900">{doctor.shortName}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-card">
                <div className="relative aspect-[4/5] bg-gradient-to-b from-mist-100 to-mist-200">
                  <Image
                    src={asset(doctor.image)}
                    alt={doctor.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="grid grid-cols-2 divide-x divide-line border-t border-line">
                  <div className="p-5 text-center">
                    <p className="font-display text-2xl font-semibold text-ink-900">{doctor.experience}</p>
                    <p className="text-xs text-muted">лет стажа</p>
                  </div>
                  <div className="p-5 text-center">
                    <p className="font-display text-2xl font-semibold text-ink-900">{doctor.specialties.length}</p>
                    <p className="text-xs text-muted">специализации</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  {doctor.category && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white">
                      <Award className="h-3.5 w-3.5 text-teal-400" /> {doctor.category}
                    </span>
                  )}
                  {doctor.forKids && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-700">
                      <Baby className="h-3.5 w-3.5" /> Детский приём
                    </span>
                  )}
                </div>

                <h1 className="mt-5 text-balance text-4xl leading-[1.1] text-ink-900 lg:text-5xl">
                  {doctor.name}
                </h1>
                <p className="mt-3 text-lg font-medium text-teal-600">{doctor.primary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {doctor.specialties.map((s) => (
                    <span key={s} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-ink-800">
                      {s}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-lg leading-relaxed text-muted">{doctor.bio}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/kontakty" variant="dark" size="lg">
                    <CalendarCheck className="h-5 w-5" /> Записаться на приём
                  </Button>
                  <Button href={company.phones[0].href} variant="outline" size="lg">
                    <Phone className="h-5 w-5" /> {company.phones[0].value}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_340px]">
          <Reveal>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-500/10 text-teal-600 ring-1 ring-inset ring-teal-500/20">
                  <Stethoscope className="h-4.5 w-4.5" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink-900">С чем обращаются</h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {doctor.focus.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-500/15 text-teal-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[0.95rem] leading-snug text-ink-800">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <aside className="hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-line bg-ink-950 p-6 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-aurora text-white">
                <BriefcaseMedical className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-xl font-semibold">Записаться к специалисту</p>
              <p className="mt-2 text-sm text-white/55">Администратор подберёт удобное время и ответит на вопросы.</p>
              <Button href="/kontakty" variant="dark" className="mt-5 w-full">
                Оставить заявку
              </Button>
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
                {company.phones.map((p) => (
                  <a key={p.href} href={p.href} className="flex items-center gap-2 text-white/60 hover:text-white">
                    <Phone className="h-4 w-4 text-teal-400" /> {p.value}
                  </a>
                ))}
                <a href={company.social.telegram} className="flex items-center gap-2 text-white/60 hover:text-white">
                  <Send className="h-4 w-4 text-teal-400" /> Telegram
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related doctors */}
      <section className="border-t border-line py-20">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-semibold text-ink-900 lg:text-4xl">Другие врачи</h2>
            <Link href="/vrachi" className="text-sm font-semibold text-teal-600 hover:text-teal-700">
              Все врачи →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((d, i) => (
              <DoctorCard key={d.slug} doctor={d} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
