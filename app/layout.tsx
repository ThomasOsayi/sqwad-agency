import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sqwadagency.com"),
  title: {
    default:
      "SQWAD Agency | Pay Nothing Until Your TikTok Shop Is Making Money",
    template: "%s | SQWAD Agency",
  },
  description:
    "Done-for-you TikTok Shop agency. We build, recruit, and scale your full creator program end to end. 10% of revenue. No setup fee. No retainer.",
  keywords: [
    "TikTok Shop agency",
    "TikTok Shop affiliate program",
    "creator management",
    "DTC brand growth",
    "Spark Ads",
    "creator-led growth",
    "performance marketing",
  ],
  authors: [{ name: "SQWAD Technologies LLC" }],
  creator: "SQWAD Technologies LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sqwadagency.com",
    siteName: "SQWAD Agency",
    title:
      "SQWAD Agency | Pay Nothing Until Your TikTok Shop Is Making Money",
    description:
      "Done-for-you TikTok Shop agency. We launch, recruit, manage, and scale your creator program. 10% of revenue. No setup fee. No retainer.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SQWAD Agency — TikTok Shop done for you",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SQWAD Agency | Pay Nothing Until Your TikTok Shop Is Making Money",
    description:
      "Done-for-you TikTok Shop agency. 10% of revenue. No setup fee. No retainer.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#07070c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}