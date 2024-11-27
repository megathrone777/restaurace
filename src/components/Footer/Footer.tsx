"use client";
import React from "react";
import { useTranslations } from "next-intl";

import { Container } from "~/theme/components";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Copyright } from "./Copyright";
import { Menu } from "./Menu";
import { Time } from "./Time";
import {
  StyledWrapper,
  StyledLayout,
  StyledColumn,
  StyledTitle,
} from "./Footer.styled";

const Footer: React.FC = () => {
  const t = useTranslations();

  return (
    <StyledWrapper>
      <Container>
        <StyledLayout>
          <StyledColumn>
            <StyledTitle>{t("footer.about")}</StyledTitle>
            <About />
          </StyledColumn>

          <StyledColumn>
            <StyledTitle>{t("footer.time")}</StyledTitle>
            <Time />
          </StyledColumn>

          <StyledColumn>
            <StyledTitle>{t("footer.menu")}</StyledTitle>
            <Menu />
          </StyledColumn>

          <StyledColumn>
            <StyledTitle>{t("footer.contacts")}</StyledTitle>
            <Contacts />
          </StyledColumn>
        </StyledLayout>

        <Copyright />
      </Container>
    </StyledWrapper>
  );
};

export { Footer };
