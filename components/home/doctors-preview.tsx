import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { DoctorCard } from "@/components/ui/doctor-card";
import { doctors } from "@/lib/data/doctors";

export function DoctorsPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Наши врачи"
          title="Опыт, которому доверяют."
          description="Приём ведут специалисты со стажем до 46 лет, включая врачей высшей категории. Каждый пациент получает внимание и индивидуальный подход."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.slice(0, 4).map((d, i) => (
            <DoctorCard key={d.slug} doctor={d} index={i} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/vrachi" variant="primary" size="lg">
            Все врачи клиники
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
