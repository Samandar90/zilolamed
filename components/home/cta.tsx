import { ArrowRight, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/ui/book-button";
import { company } from "@/lib/data/company";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950 px-8 py-16 text-center sm:px-16 lg:py-24">
            <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]" />
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-[30rem] w-[40rem] -translate-x-1/2 opacity-50 blur-[120px]"
              style={{ background: "radial-gradient(circle, rgba(20,184,166,0.5), transparent 60%)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-32 right-0 h-[24rem] w-[24rem] opacity-40 blur-[120px]"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.5), transparent 60%)" }}
            />

            <div className="relative mx-auto max-w-3xl">
              <span className="eyebrow justify-center text-teal-300">
                <span className="h-px w-6 bg-current opacity-60" />
                Запишитесь сегодня
              </span>
              <h2 className="mt-6 text-balance text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl">
                Позаботьтесь о здоровье вовремя.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
                Оставьте заявку или позвоните в регистратуру — администратор подберёт врача
                и удобное время. Приём возможен уже в день обращения.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BookButton prefill={{ source: "cta" }} size="lg" variant="dark">
                  Записаться на приём
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </BookButton>
                <Button
                  href={company.social.telegram}
                  size="lg"
                  className="border border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  <Send className="h-5 w-5" />
                  Написать в Telegram
                </Button>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-2 text-sm text-white/50 sm:flex-row">
                {company.phones.map((p) => (
                  <a key={p.href} href={p.href} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                    <Phone className="h-4 w-4 text-teal-400" />
                    {p.value}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
