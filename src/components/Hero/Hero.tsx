"use client";
import React from "react";
import { useTranslations } from "next-intl";

import type { TProps } from "./Hero.types";
import {
  StyledWrapper,
  StyledFlagWrapper,
  StyledFlag,
  StyledTitle,
} from "./Hero.styled";

const Hero: React.FC<TProps> = ({ imageURL, title }) => {
  const t = useTranslations();

  return (
    <StyledWrapper style={{ backgroundImage: `url(${imageURL})` }}>
      <StyledTitle>{title}</StyledTitle>

      <StyledFlagWrapper>
        <StyledFlag
          alt="Support Ukraine."
          src="/images/ukraine_img.png"
          title={t("support")}
        />
        <span>{t("support")}</span>
      </StyledFlagWrapper>
    </StyledWrapper>
  );
};

export { Hero };
