import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "合瀬 雄紀 | Resume",
  description: "Fullstack Engineer Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full">
      <body
        className="min-h-dvh bg-[#f6f8fa] text-[#24292f] antialiased"
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded-md border border-[#d0d7de] bg-white px-3 py-2 text-sm shadow-sm"
        >
          本文へスキップ
        </a>
        <Header />
        <div id="content" className="min-h-[calc(100dvh-56px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
