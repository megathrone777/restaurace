import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const publicURL: string = "https://udlabacu.com";

  return [
    {
      lastModified: new Date(),
      url: publicURL,
    },
    {
      lastModified: new Date(),
      url: `${publicURL}/menu`,
    },
    {
      lastModified: new Date(),
      url: `${publicURL}/reservation`,
    },
    {
      lastModified: new Date(),
      url: `${publicURL}/gallery`,
    },
    {
      lastModified: new Date(),
      url: `${publicURL}/contacts`,
    },
  ];
};

export default sitemap;
