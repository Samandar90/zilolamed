export const company = {
  name: "Zilola Medical",
  legalName: 'ООО «Zilola Medical Service»',
  type: "Лечебно-диагностический центр",
  tagline: "Точная диагностика. Внимательная забота.",
  shortDescription:
    "Zilola Medical — частный лечебно-диагностический центр в Ташкенте. С 2011 года мы объединяем опытных врачей и современное оборудование мировых брендов, чтобы поставить точный диагноз и составить индивидуальный план лечения для каждого пациента.",
  founded: 2011,
  location: "Ташкент, Узбекистан",
  stats: {
    doctors: 6,
    years: 14,
    specialties: 12,
    patients: 20000,
  },
  address: {
    street: "ул. Таллимаржон (Фидоийлар), 43",
    district: "Мирабадский район",
    city: "Ташкент",
    postal: "100105",
    country: "Узбекистан",
    full: "ул. Таллимаржон (Фидоийлар) 43, Мирабадский район, Ташкент 100105, Узбекистан",
    lat: 41.2924,
    lng: 69.2801,
  },
  phones: [
    { label: "Регистратура и запись", value: "+998 99 022 01 14", href: "tel:+998990220114" },
  ],
  email: "zilolamedical@gmail.com",
  hours: {
    weekdays: "Пн – Сб · 08:00 – 17:00",
    round: "Приём по предварительной записи",
    weekend: "Воскресенье — выходной",
  },
  social: {
    telegram: "https://t.me/lblacademy",
    telegramHandle: "@lblacademy",
    facebook: "https://www.facebook.com/zilolamedical",
    whatsapp: "https://wa.me/998990220114",
  },
  emergency: "по записи",
} as const;

export const navLinks = [
  { label: "Врачи", href: "/vrachi" },
  { label: "Услуги", href: "/uslugi" },
  { label: "Диагностика", href: "/uslugi#diagnostika" },
  { label: "О клинике", href: "/o-klinike" },
  { label: "Контакты", href: "/kontakty" },
];
