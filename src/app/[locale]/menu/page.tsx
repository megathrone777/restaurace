import React from "react";
import { useTranslations } from "next-intl";

import { Hero } from "~/components";

const Page: React.FC = () => {
  const t = useTranslations();

  return (
    <React.Fragment>
      <Hero imageURL="/images/hero/menu_img.jpg" title={t("menu.menu")} />
      <div>Menu page</div>
    </React.Fragment>
  );
};

export { generateMetadata } from "./generateMetadata";
export default Page;
