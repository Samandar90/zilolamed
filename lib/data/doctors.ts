import doctorsData from "./doctors.json";

export type Doctor = {
  slug: string;
  name: string;
  shortName: string;
  specialties: string[];
  primary: string;
  role: string;
  experience: number;
  image: string;
  category?: string;
  forKids?: boolean;
  bio: string;
  focus: string[];
  hue: number;
};

// Источник данных — lib/data/doctors.json (редактируется через админ-панель).
export const doctors: Doctor[] = doctorsData as Doctor[];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
