import type { Metadata } from "next";
import "@fontsource/allura";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enchanted Artistry CC | Beauty, Creativity & Purpose",
  description:
    "Enchanted Artistry celebrates beauty, inspires creativity and empowers people through cosmetology, mentorship and the creative arts.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
