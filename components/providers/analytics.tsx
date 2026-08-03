"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureUtm } from "@/lib/tracking";

// ID пикселя задаётся при сборке через NEXT_PUBLIC_META_PIXEL_ID; пока переменная
// не задана, компонент только сохраняет UTM-метки. Тег Google Ads вшит в HTML
// в app/layout.tsx — здесь его загружать не нужно.
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    captureUtm();

    if (!PIXEL_ID || window.fbq) return;
    const fbq: { (...args: unknown[]): void; queue?: unknown[]; loaded?: boolean; version?: string; callMethod?: unknown } =
      function (...args: unknown[]) {
        fbq.queue!.push(args);
      };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
    window.fbq("init", PIXEL_ID);
  }, []);

  useEffect(() => {
    if (PIXEL_ID && window.fbq) window.fbq("track", "PageView");
  }, [pathname]);

  return null;
}
