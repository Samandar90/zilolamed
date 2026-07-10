import Link from "next/link";
import { Mail, MapPin, Phone, Send, Clock, ArrowUpRight, CalendarCheck } from "lucide-react";
import { company, navLinks } from "@/lib/data/company";
import { specialties } from "@/lib/data/specialties";
import { Logo } from "@/components/ui/logo";
import { BookButton } from "@/components/ui/book-button";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-950 text-white/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(20,184,166,0.5), transparent 60%)" }}
      />

      <div className="container-x relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo className="h-10" />
            <p className="mt-6 text-[0.95rem] leading-relaxed text-white/55">
              {company.shortDescription}
            </p>
            <BookButton prefill={{ source: "footer" }} variant="dark" className="mt-6">
              <CalendarCheck className="h-4 w-4" /> Записаться на приём
            </BookButton>
            <div className="mt-6 flex gap-3">
              <a
                href={company.social.telegram}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-teal-400/50 hover:text-teal-300"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-teal-400/50 hover:text-teal-300"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17.5V.2C17.1.1 16 0 14.8 0 12.3 0 10.6 1.5 10.6 4.3V6H8v3h2.6v9H14V9z" />
                </svg>
              </a>
            </div>
          </div>

          <FooterCol title="Разделы" links={navLinks.map((l) => ({ label: l.label, href: l.href }))} />
          <FooterCol
            title="Направления"
            links={specialties.slice(0, 6).map((s) => ({ label: s.name, href: "/uslugi" }))}
          />

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">Контакты</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span className="text-white/60">{company.address.full}</span>
              </li>
              {company.phones.map((p) => (
                <li key={p.href} className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                  <a href={p.href} className="text-white/60 transition-colors hover:text-white">
                    {p.value}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <a href={`mailto:${company.email}`} className="text-white/60 transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span className="text-white/60">{company.hours.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-8">
          <span className="text-xs uppercase tracking-[0.16em] text-white/30">Режим работы</span>
          <span className="text-xs font-medium text-white/45">{company.hours.weekdays} · {company.hours.weekend}</span>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Все права защищены.
          </p>
          <p className="flex items-center gap-1.5">
            Заботимся о здоровье Ташкента с 2011 года
            <ArrowUpRight className="h-3.5 w-3.5 text-teal-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
