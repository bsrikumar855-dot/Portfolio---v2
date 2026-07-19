import type { NextConfig } from "next";

// For GitHub Pages project sites the app is served from a sub-path
// (e.g. /Portfolio---v2). Set NEXT_PUBLIC_BASE_PATH at build time to prefix
// all routes and assets. Leave it empty for Netlify or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
