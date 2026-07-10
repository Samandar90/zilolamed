import checkupsData from "./checkups.json";

export type Checkup = {
  slug: string;
  name: string;
  short: string;
  price: string;
  image: string;
  description: string;
  includes: string[];
  audience: string;
  featured?: boolean;
};

// Источник данных — lib/data/checkups.json (редактируется через админ-панель).
export const checkups: Checkup[] = checkupsData as Checkup[];

export const getCheckup = (slug: string) => checkups.find((c) => c.slug === slug);
export const featuredCheckups = checkups.filter((c) => c.featured);
