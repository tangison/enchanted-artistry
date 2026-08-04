import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Enchanted Artistry CC",
    short_name: "Enchanted",
    description: "Cosmetology, arts, mentorship and guidance.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff9f7",
    theme_color: "#bd7478",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
