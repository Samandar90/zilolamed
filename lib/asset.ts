// Префикс базового пути для статических ассетов (фото и т.п.).
// next/image с unoptimized не добавляет basePath к src, поэтому делаем это вручную.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}
