import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/owner",
  "/floor-plans",
  "/shops",
  "/gallery",
  "/invest",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
