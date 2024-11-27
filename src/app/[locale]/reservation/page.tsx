import React from "react";
import { useTranslations } from "next-intl";

import { Hero, Media } from "~/components";
import { Form } from "./components";

const Page: React.FC = () => {
  const t = useTranslations();

  return (
    <React.Fragment>
      <Hero
        imageURL="/images/hero/reservation_img.jpg"
        title={t("reservation.title")}
      />

      <Form />
      <Media />
    </React.Fragment>
  );
};

export { metadata } from "./metadata";
export default Page;
