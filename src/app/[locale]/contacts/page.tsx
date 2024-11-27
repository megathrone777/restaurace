import React from "react";
import { useTranslations } from "next-intl";

import { Hero } from "~/components";
import { Form, Map } from "./components";

const Page: React.FC = () => {
  const t = useTranslations();

  return (
    <React.Fragment>
      <Hero imageURL="/images/hero/menu_img.jpg" title={t("menu.contacts")} />
      <Form />
      <Map />
    </React.Fragment>
  );
};

export { metadata } from "./metadata";
export default Page;
