import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { advantages } from "@/lib/data/content";

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Почему Zilola Medical"
          title={<>Клиника, которой<br className="hidden sm:block" /> доверяют здоровье.</>}
          description="Мы не просто ведём приём — мы выстраиваем заботу от точной диагностики до результата, которому можно доверять."
        />

        <StaggerGroup className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-float">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-aurora opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10" />
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-500/10 text-teal-600 ring-1 ring-inset ring-teal-500/20">
                    <item.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="font-display text-sm font-semibold text-teal-600">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
