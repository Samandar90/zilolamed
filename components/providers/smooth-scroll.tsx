import type { ReactNode } from "react";

// Use native scrolling: no perpetual JavaScript animation loop is needed.
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
