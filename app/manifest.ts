import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mario Salamanca | Software Developer & Systems Builder",
    short_name: "M. Salamanca",
    description:
      "A personal brand platform for Mario Salamanca, software developer and systems builder.",
    start_url: ".",
    scope: ".",
    display: "standalone",
    background_color: "#060a12",
    theme_color: "#060a12",
    icons: [
      {
        src: "icons/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
