import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    allow: ["/", "/menu", "/reservation", "/contacts", "/gallery"],
    userAgent: "*",
  },
});

export default robots;
