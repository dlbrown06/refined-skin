import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BoulevardWidget from "@/components/BoulevardWidget";

export const metadata: Metadata = {
  title: "Refined Skin & Acne Clinic",
  description:
    "Refined Skin is a skincare and acne clinic located in Northwest Ohio specializing in customized treatments, coaching, and simplified skincare routines.",
  keywords: [
    "acne clinic",
    "skincare",
    "esthetician",
    "Leipsic Ohio",
    "acne treatment",
    "facial",
    "chemical peel",
    "microchanneling",
    "dermaplaning",
  ],
  icons: [],
  openGraph: {
    title: "Refined Skin & Acne Clinic",
    description:
      "Rewrite your skin story. Acne clinic and skincare treatments in Northwest Ohio.",
    url: "https://refined.skin",
    siteName: "Refined Skin & Acne Clinic",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BoulevardWidget />
      </body>
    </html>
  );
}
