import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { WhyUs } from "@/components/home/why-us";
import { Specialties } from "@/components/home/specialties";
import { Services } from "@/components/home/services";
import { Checkups } from "@/components/home/checkups";
import { DoctorsPreview } from "@/components/home/doctors-preview";
import { Certificates } from "@/components/home/certificates";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyUs />
      <Specialties />
      <DoctorsPreview />
      <Services />
      <Checkups />
      <Certificates />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
