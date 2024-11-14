import React from "react";
import { useTranslations } from "next-intl";

import { Media } from "~/components";

const Page: React.FC = () => {
  const t = useTranslations();

  return (
    <React.Fragment>
      <Media title={t("menu.about")} />
      <div>About page</div>
    </React.Fragment>
  );
};

export { metadata } from "./metadata";
export default Page;
