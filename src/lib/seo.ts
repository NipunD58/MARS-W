export const SITE_URL = "https://mars-robotics.org";
export const SITE_NAME = "MARS Robotics";
export const SOCIAL_IMAGE = `${SITE_URL}/og-image.png`;

type SeoPage = {
  title: string;
  description: string;
  path: string;
};

export function seoHead({ title, description, path }: SeoPage) {
  const url = new URL(path, SITE_URL).toString();

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SOCIAL_IMAGE },
      {
        property: "og:image:alt",
        content: "MARS — Multifunctional Agricultural Robotic System for Smallholder Farmers",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
