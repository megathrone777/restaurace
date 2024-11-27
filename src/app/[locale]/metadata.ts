import type { Metadata } from "next";

const imageURL: string = "/images/og_img.jpg";
const publicURL: string = "https://udlabacu.com";
const description: string =
  "Tradiční česká restaurace v centru prahy. Restaurace s klasickou českou kuchyní";
const title: string = "U Dlabačů | Tradiční česká restaurace v centru prahy";

const metadata: Metadata = {
  description,
  metadataBase: new URL(publicURL),
  openGraph: {
    description,
    images: `${publicURL}${imageURL}`,
    siteName: "U Dlabačů",
    title,
    type: "website",
    url: publicURL,
  },
  title,
};

export { metadata };
