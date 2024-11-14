"use client";
import React from "react";

import { Container } from "~/theme/components";
import { Contacts } from "./Contacts";
import { Copyright } from "./Copyright";
import {
  StyledWrapper,
  StyledLayout,
  StyledColumn,
  StyledTitle,
} from "./Footer.styled";

const Footer: React.FC = () => (
  <StyledWrapper>
    <Container>
      <StyledLayout>
        <StyledColumn>
          <StyledTitle>about us</StyledTitle>
        </StyledColumn>

        <StyledColumn>
          <StyledTitle>opening hours</StyledTitle>
        </StyledColumn>

        <StyledColumn>
          <StyledTitle>quick links</StyledTitle>
        </StyledColumn>

        <StyledColumn>
          <StyledTitle>contact us</StyledTitle>
          <Contacts />
        </StyledColumn>
      </StyledLayout>

      <Copyright />
    </Container>
  </StyledWrapper>
);

export { Footer };
