import type { Metadata } from "next";
import "@fontsource/allura";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enchanted Artistry CC | Cosmetology, Creativity & Guidance",
  description:
    "Enchanted Artistry brings cosmetology, creativity and caring guidance together for women, including expectant and new mothers.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
