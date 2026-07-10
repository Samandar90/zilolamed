import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/ui/book-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceGroups, priceList } from "@/lib/data/services";
import { specialties } from "@/lib/data/specialties";
import { checkups } from "@/lib/data/checkups";
import { company } from "@/lib/data/company";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Услуги и цены",
  description:
    "Услуги и цены лечебно-диагностического центра Zilola Medical в Ташкенте: консультации врачей от 200 000 сум, УЗИ, ЭКГ, холтер, ЭЭГ, лаборатория, физиотерапия, гинекология и программы check-up.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Услуги" }]}
        eyebrow="Услуги клиники"
        title={<>Полный цикл помощи <span className="text-aurora">в одном месте.</span></>}
        description="От первичной консультации до диагностики, лечения и восстановления — всё необходимое под одной крышей, на современном оборудовании и без лишних очередей."
      >
        <div className="flex flex-wrap gap-3">
          <BookButton prefill={{ source: "uslugi-header" }} variant="dark">Записаться на приём</BookButton>
          <Button href={company.phones[0].href} variant="outline">
            <Phone className="h-4 w-4" /> Узнать цены
          </Button>
        </div>
      </PageHeader>

      {/* Directions */}
      <section className="py-16 lg:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Направления" title="Медицина для взрослых и детей." />
          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((s) => (
              <StaggerItem key={s.slug}>
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-500/10 text-teal-600 ring-1 ring-inset ring-teal-500/20 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                    <s.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-semibold text-ink-900">{s.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.description}</p>
                  <BookButton
                    prefill={{ specialty: s.name, source: "uslugi-directions" }}
                    variant="ghost"
                    size="sm"
                    className="mt-4 self-start !px-0 text-teal-600 hover:!bg-transparent hover:text-teal-700"
                  >
                    Записаться →
                  </BookButton>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Service groups */}
      <section className="bg-mist-50/70 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Что мы делаем"
            title="Услуги и процедуры."
            description="Актуальные цены уточняйте в регистратуре — мы всегда честно проговариваем стоимость заранее."
          />
          <div className="mt-14 space-y-5">
            {serviceGroups.map((g, i) => (
              <Reveal key={g.slug} delay={(i % 3) * 0.05}>
                <div
                  id={g.slug}
                  className="grid scroll-mt-28 gap-8 rounded-[2rem] border border-line bg-white p-8 lg:grid-cols-[320px_1fr] lg:p-10"
                >
                  <div>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aurora text-white">
                      <g.icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">{g.name}</h3>
                    <p className="mt-1 text-sm font-medium text-teal-600">{g.short}</p>
                    <p className="mt-3 leading-relaxed text-muted">{g.description}</p>
                  </div>
                  <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {g.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 rounded-2xl border border-line bg-mist-50/50 p-4">
                          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-500/15 text-teal-600">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-[0.95rem] leading-snug text-ink-800">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <BookButton prefill={{ source: "uslugi-groups" }} variant="dark" size="lg">
              Записаться на приём <ArrowRight className="h-5 w-5" />
            </BookButton>
          </div>
        </div>
      </section>

      {/* Check-up programs */}
      <section id="checkup" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Программы Check-up"
            title="Комплексное обследование за один визит."
            description="Готовые программы для разных задач — от базовой проверки здоровья до профильной диагностики. Цены указаны за программу."
          />
          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {checkups.map((c) => (
              <StaggerItem key={c.slug}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float">
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
                    <h3 className="text-lg font-semibold text-ink-900">{c.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
                    <ul className="mt-4 space-y-1.5">
                      {c.includes.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-ink-700">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" /> {it}
                        </li>
                      ))}
                    </ul>
                    <BookButton
                      prefill={{ note: `Программа check-up: ${c.name}`, source: "uslugi-checkup" }}
                      variant="outline"
                      className="mt-6 w-full"
                    >
                      Записаться
                    </BookButton>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Price list */}
      <section className="bg-mist-50/70 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Цены"
            title="Прозрачная стоимость."
            description="Вы всегда знаете цену заранее. Полный прайс и детали уточняйте в регистратуре по телефону."
          />
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-line bg-white">
            <ul className="divide-y divide-line">
              {priceList.map((p) => (
                <li key={p.name} className="flex items-center justify-between gap-4 px-6 py-4">
                  <span className="text-ink-800">{p.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="whitespace-nowrap font-semibold text-ink-900">{p.price}</span>
                    <BookButton
                      prefill={{ note: p.name, source: "uslugi-pricelist" }}
                      variant="ghost"
                      size="sm"
                      className="!px-0 text-teal-600 hover:!bg-transparent hover:text-teal-700"
                    >
                      Записаться
                    </BookButton>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <BookButton prefill={{ source: "uslugi-pricelist-cta" }} variant="dark" size="lg">
              Записаться на приём
            </BookButton>
            <Button href={company.phones[0].href} variant="outline" size="lg">
              <Phone className="h-5 w-5" /> Узнать точную цену
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
