import { BadgeCheck, Award, Microscope, ClipboardList, Wallet, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const trust = [
  { title: "Лицензированная деятельность", issuer: "Официальная лицензия", note: "Частная медицинская практика", icon: BadgeCheck },
  { title: "Врачи высшей категории", issuer: "Сертифицированные специалисты", note: "Стаж до 46 лет", icon: Award },
  { title: "Современное оборудование", issuer: "Мировые бренды", note: "УЗИ, ЭКГ, холтер, лаборатория", icon: Microscope },
  { title: "Программы check-up", issuer: "8 программ", note: "Обследование за один визит", icon: ClipboardList },
  { title: "Прозрачные цены", issuer: "Без скрытых доплат", note: "Стоимость известна заранее", icon: Wallet },
  { title: "Доверие с 2011 года", issuer: "Более 14 лет практики", note: "Тысячи пациентов", icon: ShieldCheck },
];

export function Certificates() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Доверие и качество"
          title="Причины доверять нам здоровье."
          description="Лицензии, опытные врачи и современное оборудование — всё, что важно, когда речь идёт о вашем здоровье и здоровье близких."
        />
        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map((c) => (
            <StaggerItem key={c.title}>
              <div className="group flex h-full items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-aurora text-white">
                  <c.icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">{c.title}</h3>
                  <p className="mt-1 text-sm font-medium text-teal-600">{c.issuer}</p>
                  <p className="mt-1 text-sm text-muted">{c.note}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
