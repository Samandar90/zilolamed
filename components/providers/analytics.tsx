"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureUtm } from "@/lib/tracking";

// Идентификаторы задаются при сборке; незаданный сервис просто не загружается.
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    captureUtm();

    if (GOOGLE_ADS_ID && !window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // Google требует передавать именно объект arguments, не массив
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GOOGLE_ADS_ID);
    }

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
