import type { LucideIcon } from "lucide-react";
import { getIcon } from "@/lib/icon-registry";
import specialtiesData from "./specialties.json";

export type Specialty = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

type SpecialtyRecord = Omit<Specialty, "icon"> & { icon: string };

// Источник данных — lib/data/specialties.json (редактируется через админ-панель).
export const specialties: Specialty[] = (specialtiesData as SpecialtyRecord[]).map((s) => ({
  ...s,
  icon: getIcon(s.icon),
}));

export const getSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);
