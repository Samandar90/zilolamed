import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { DoctorCard } from "@/components/ui/doctor-card";
import { BookButton } from "@/components/ui/book-button";
import { doctors } from "@/lib/data/doctors";

export const metadata: Metadata = {
  title: "Врачи клиники",
  description:
    "Опытные врачи лечебно-диагностического центра Zilola Medical в Ташкенте: неврологи, кардиолог, гинеколог, педиатр, эндокринолог, врачи УЗИ. Стаж до 46 лет. Запись на приём.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Врачи" }]}
        eyebrow="Наши специалисты"
        title={<>Врачи, которым <span className="text-aurora">доверяют.</span></>}
        description="Команда лечебно-диагностического центра Zilola Medical — опытные специалисты со стажем до 46 лет, включая врачей высшей категории. Выберите врача и запишитесь на удобное время."
      >
        <BookButton prefill={{ source: "vrachi-header" }} variant="dark">Записаться на приём</BookButton>
      </PageHeader>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d, i) => (
              <DoctorCard key={d.slug} doctor={d} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
