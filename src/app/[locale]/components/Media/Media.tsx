"use client";
import React from "react";

import { Button } from "~/theme/components";
import { StyledWrapper, StyledLayout } from "./Media.styled";

const Media: React.FC = () => (
  <StyledWrapper>
    <StyledLayout>
      <Button href="/menu">Menu</Button>
    </StyledLayout>
  </StyledWrapper>
);

export { Media };
