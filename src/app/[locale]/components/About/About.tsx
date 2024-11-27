"use client";
import React from "react";
import { useTranslations } from "next-intl";

import { Container } from "~/theme/components";
import { StyledWrapper, StyledTitle, StyledLayout } from "./About.styled";

const About: React.FC = () => {
  const t = useTranslations();

  return (
    <StyledWrapper>
      <Container>
        <StyledTitle>{t("about.title")}</StyledTitle>

        <StyledLayout>
          <p>
            {t("about.text")}{" "}
            <a href="https://maps.app.goo.gl/qHwDsY8tuj6ZQz8C9" target="_blank">
              NÁMĚSTÍ I.P.PAVLOVA
            </a>
          </p>
          <p>{t("about.text2")}</p>
          <p>{t("about.text3")}</p>
          <p dangerouslySetInnerHTML={{ __html: t.raw("about.text4") }} />
        </StyledLayout>
      </Container>
    </StyledWrapper>
  );
};

export { About };
