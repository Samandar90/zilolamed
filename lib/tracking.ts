// Отслеживание рекламных источников (UTM) и конверсий для таргетированной рекламы.
// UTM-метки сохраняются на время сессии, чтобы заявка «помнила» источник,
// даже если пациент походил по сайту перед отправкой формы.

const UTM_KEY = "zm_utm";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function captureUtm() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const parts = UTM_PARAMS.map((key) => params.get(key)).filter(Boolean);
    if (parts.length) sessionStorage.setItem(UTM_KEY, parts.join(" / "));
  } catch {
    // sessionStorage может быть недоступен (приватный режим) — не критично
  }
}

export function getUtmSource(): string | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    return sessionStorage.getItem(UTM_KEY) ?? undefined;
  } catch {
    return undefined;
  }
}

/** Сообщает Meta Pixel о заявке (событие Lead) — по нему оптимизируется реклама. */
export function trackLead() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}
