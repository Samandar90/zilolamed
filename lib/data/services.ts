import type { LucideIcon } from "lucide-react";
import { getIcon } from "@/lib/icon-registry";
import servicesData from "./services.json";

export type ServiceGroup = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

type ServiceGroupRecord = Omit<ServiceGroup, "icon"> & { icon: string };

// Источник данных — lib/data/services.json (редактируется через админ-панель).
export const serviceGroups: ServiceGroup[] = (servicesData.serviceGroups as ServiceGroupRecord[]).map((g) => ({
  ...g,
  icon: getIcon(g.icon),
}));

export const getServiceGroup = (slug: string) => serviceGroups.find((s) => s.slug === slug);

export const priceList: { name: string; price: string }[] = servicesData.priceList;
