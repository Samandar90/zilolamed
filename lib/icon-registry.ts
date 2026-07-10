import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  HeartPulse,
  Brain,
  Venus,
  Baby,
  Activity,
  Wind,
  Salad,
  Waves,
  Scan,
  FlaskConical,
  UserRound,
  ShieldPlus,
  ShieldCheck,
  Pill,
  Syringe,
  Eye,
  Bone,
  Ear,
  Microscope,
  ClipboardList,
  BadgeCheck,
  Wallet,
} from "lucide-react";

// Единый реестр иконок: имя (используется в JSON-данных и в админ-панели) → компонент.
// При добавлении новой специальности/услуги через админку иконка выбирается из этого списка.
export const iconRegistry = {
  Stethoscope,
  HeartPulse,
  Brain,
  Venus,
  Baby,
  Activity,
  Wind,
  Salad,
  Waves,
  Scan,
  FlaskConical,
  UserRound,
  ShieldPlus,
  ShieldCheck,
  Pill,
  Syringe,
  Eye,
  Bone,
  Ear,
  Microscope,
  ClipboardList,
  BadgeCheck,
  Wallet,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconRegistry;

export function getIcon(name: string): LucideIcon {
  return iconRegistry[name as IconName] ?? Stethoscope;
}
