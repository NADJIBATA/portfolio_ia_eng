import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` produces a fully static site in /out,
  // deployable on Vercel, Netlify, GitHub Pages or any static host.
  output: "export",
  images: { unoptimized: true },
  // Hide the Next.js "N" badge shown in the corner during `npm run dev`
  devIndicators: false,
};

export default nextConfig;
