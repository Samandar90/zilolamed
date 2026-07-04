import type { NextConfig } from "next";

// При сборке для GitHub Pages выставляется GITHUB_PAGES=true (см. workflow).
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "zilolamed";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export", // статический экспорт (GitHub Pages)
  images: {
    unoptimized: true, // Pages не поддерживает оптимизатор изображений
    formats: ["image/avif", "image/webp"],
  },
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
