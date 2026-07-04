import type { NextConfig } from "next";

// Базовый путь для GitHub Pages (проектный сайт): /zilolamed.
// Локально переменная не задана → basePath пустой, сайт работает от корня.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export", // статический экспорт (GitHub Pages)
  images: {
    unoptimized: true, // Pages не поддерживает оптимизатор изображений
  },
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
