import companyData from "./company.json";
import { doctors } from "./doctors";
import { specialties } from "./specialties";

// Источник данных — lib/data/company.json (редактируется через админ-панель).
// stats.doctors / stats.specialties считаются от реальных данных, чтобы не устаревать.
export const company = {
  ...companyData,
  stats: {
    ...companyData.stats,
    doctors: doctors.length,
    specialties: specialties.length,
  },
} as const;

export const navLinks = [
  { label: "Врачи", href: "/vrachi" },
  { label: "Услуги", href: "/uslugi" },
  { label: "Диагностика", href: "/uslugi#diagnostika" },
  { label: "О клинике", href: "/o-klinike" },
  { label: "Контакты", href: "/kontakty" },
];
