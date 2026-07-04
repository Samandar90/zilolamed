import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://zilolamedical.uz/sitemap.xml",
    host: "https://zilolamedical.uz",
  };
}
