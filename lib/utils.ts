import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUZS(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value) + " so'm";
}
