import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  // Chỉ static export khi build cho GitHub Pages
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/longtv",
        assetPrefix: "/longtv/",
      }
    : {}),
};

export default nextConfig;
