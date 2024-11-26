"use client";
import React from "react";

import type { TProps } from "./Hero.types";
import { StyledWrapper, StyledTitle } from "./Hero.styled";

const Hero: React.FC<TProps> = ({ imageURL, title }) => (
  <StyledWrapper style={{ backgroundImage: `url(${imageURL})` }}>
    <StyledTitle>{title}</StyledTitle>
  </StyledWrapper>
);

export { Hero };
