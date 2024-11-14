import React from "react";
import { useTranslations } from "next-intl";

import { Media } from "~/components";
import { Container } from "~/theme/components";
import { Form } from "./components";

const Page: React.FC = () => {
  const t = useTranslations();

  return (
    <div style={{ backgroundColor: "white" }}>
      <Media title={t("reservation.title")} />

      <Container>
        <Form />
      </Container>
    </div>
  );
};

export { metadata } from "./metadata";
export default Page;
