import React from "react";
import { useTranslations } from "next-intl";

import { Hero, Media } from "~/components";
import { Gallery } from "./components";

const Page: React.FC = () => {
  const t = useTranslations();

  return (
    <React.Fragment>
      <Hero imageURL="/images/hero/gallery_img.jpg" title={t("menu.gallery")} />
      <Gallery />
      <Media />
    </React.Fragment>
  );
};

export { metadata } from "./metadata";
export default Page;
