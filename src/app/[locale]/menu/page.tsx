import React from "react";
import { useTranslations } from "next-intl";

import { Hero } from "~/components";
import { Gallery } from "./components";

const Page: React.FC = () => {
  const t = useTranslations();

  return (
    <React.Fragment>
      <Hero imageURL="/images/hero/menu_img.jpg" title={t("menu.menu")} />
      <Gallery />
    </React.Fragment>
  );
};

export { metadata } from "./metadata";
export default Page;
