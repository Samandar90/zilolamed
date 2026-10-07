import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "article" | "h2" | "p";
};

// Content stays visible in exported HTML, even before JavaScript loads.
export function Reveal({ children, className, as: Tag = "div" }: RevealProps) {
  return <Tag className={className}>{children}</Tag>;
}

export function StaggerGroup({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
