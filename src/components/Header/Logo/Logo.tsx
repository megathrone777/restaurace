import React from "react";

import { StyledWrapper, StyledLink, StyledImage } from "./Logo.styled";

const Logo: React.FC = () => (
  <StyledWrapper>
    <StyledLink href="/">
      <StyledImage alt="Logo." src="/images/logo_img.png" />
    </StyledLink>
  </StyledWrapper>
);

export { Logo };
