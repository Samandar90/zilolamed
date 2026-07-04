import type { Metadata } from "next";
import { Mail, MapPin, Phone, Send, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { AppointmentForm } from "@/components/contact/appointment-form";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Контакты и запись",
  description:
    "Записаться на приём в клинику Zilola Medical в Ташкенте: телефоны регистратуры, адрес (ул. Таллимаржон 43, Мирабадский район), Telegram, WhatsApp, часы работы и карта.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Контакты" }]}
        eyebrow="Запись и контакты"
        title={<>Запишитесь на <span className="text-aurora">приём.</span></>}
        description="Оставьте заявку — администратор перезвонит, подберёт врача и удобное время. Или свяжитесь с нами напрямую по телефону, в Telegram или WhatsApp."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_420px]">
          <Reveal>
            <div className="rounded-[2rem] border border-line bg-white p-7 shadow-card lg:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink-900">Заявка на приём</h2>
              <p className="mt-2 text-muted">Заполните форму — мы свяжемся с вами в ближайшее время.</p>
              <div className="mt-8">
                <AppointmentForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <InfoCard icon={MapPin} title="Адрес">
                <p className="text-ink-800">{company.address.full}</p>
              </InfoCard>

              <InfoCard icon={Phone} title="Телефоны">
                {company.phones.map((p) => (
                  <a key={p.href} href={p.href} className="block text-ink-800 transition-colors hover:text-teal-600">
                    {p.value} <span className="text-xs text-muted">· {p.label}</span>
                  </a>
                ))}
              </InfoCard>

              <InfoCard icon={Mail} title="Эл. почта">
                <a href={`mailto:${company.email}`} className="text-ink-800 transition-colors hover:text-teal-600">
                  {company.email}
                </a>
              </InfoCard>

              <InfoCard icon={Clock} title="Часы работы">
                <p className="text-ink-800">{company.hours.weekdays}</p>
                <p className="text-sm text-muted">{company.hours.round}</p>
                <p className="text-sm text-muted">{company.hours.weekend}</p>
              </InfoCard>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={company.social.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-[#229ED9]/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#229ED9] text-white">
                    <Send className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink-900">Telegram</span>
                    <span className="text-xs text-muted">{company.social.telegramHandle}</span>
                  </span>
                </a>
                <a
                  href={company.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-[#25D366]/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink-900">WhatsApp</span>
                    <span className="text-xs text-muted">Написать нам</span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-12">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-line shadow-card">
              <iframe
                title="Zilola Medical на карте"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${company.address.lng - 0.02}%2C${company.address.lat - 0.012}%2C${company.address.lng + 0.02}%2C${company.address.lat + 0.012}&layer=mapnik&marker=${company.address.lat}%2C${company.address.lng}`}
                className="h-[420px] w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500/10 text-teal-600 ring-1 ring-inset ring-teal-500/20">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-semibold text-ink-900">{title}</h3>
      </div>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}
