import type { Metadata, Viewport } from "next";
import "@fontsource/allura";
import "./globals.css";

const siteUrl = "https://www.enchantedna.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Enchanted Artistry CC | Cosmetology, Arts, Mentorship & Guidance",
    template: "%s | Enchanted Artistry CC",
  },
  description:
    "Enchanted Artistry brings cosmetology, creativity and caring guidance together for women, including expectant and new mothers.",
  applicationName: "Enchanted Artistry CC",
  keywords: [
    "Enchanted Artistry CC",
    "cosmetology Windhoek",
    "makeup",
    "hair styling",
    "guidance for mothers",
    "drama coaching",
    "content creation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Enchanted Artistry CC",
    title: "Enchanted Artistry CC | Cosmetology, Arts, Mentorship & Guidance",
    description:
      "A welcoming space for beauty, creativity and caring guidance in Windhoek, Namibia.",
    locale: "en_NA",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Enchanted Artistry CC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enchanted Artistry CC",
    description:
      "Cosmetology, arts, mentorship and guidance in Windhoek, Namibia.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
