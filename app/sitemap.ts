import type { MetadataRoute } from "next";
import { doctors } from "@/lib/data/doctors";

export const dynamic = "force-static";

const base = "https://zilolamedical.uz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/vrachi", "/uslugi", "/o-klinike", "/kontakty"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${base}/vrachi/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...doctorRoutes];
}
