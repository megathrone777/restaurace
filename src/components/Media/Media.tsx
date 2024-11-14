"use client";
import React from "react";

import type { TProps } from "./Media.types";
import { StyledWrapper, StyledImage, StyledTitle } from "./Media.styled";

const Media: React.FC<TProps> = ({ title }) => (
  <StyledWrapper>
    <StyledTitle>{title}</StyledTitle>
    <StyledImage alt="U Dlabacu." src="/images/media_img.jpg" />
  </StyledWrapper>
);

export { Media };
