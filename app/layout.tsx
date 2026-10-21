import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const title = "Nadjib Atamnia — AI Engineer · GenAI & RAG";
const description =
  "AI Engineer based in Paris. I build production LLM systems: RAG pipelines, hybrid search, MCP agents, FastAPI backends and React interfaces.";

export const metadata: Metadata = {
  // TODO: replace with your final domain once deployed
  metadataBase: new URL("https://nadjib-atamnia.vercel.app"),
  title,
  description,
  keywords: ["AI Engineer", "Generative AI", "RAG", "LLM", "MCP", "Machine Learning", "Paris", "Nadjib Atamnia"],
  authors: [{ name: "Nadjib Atamnia" }],
  openGraph: { title, description, type: "website", images: ["/projects/docintel-chat.webp"] },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#07080b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
