import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.enchantedna.com/",
      lastModified: new Date("2026-08-04T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
