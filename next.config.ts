import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` produces a fully static site in /out,
  // deployable on Vercel, Netlify, GitHub Pages or any static host.
  output: "export",
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
