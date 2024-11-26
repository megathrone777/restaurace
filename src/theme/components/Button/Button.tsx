import React from "react";

import type { TProps } from "./Button.types";
import { StyledButton, StyledLink } from "./Button.styled";

const Button: React.FC<TProps> = ({ children, href, type }) =>
  href ? (
    <StyledLink {...{ href }}>{children}</StyledLink>
  ) : (
    <StyledButton {...{ type }}>{children}</StyledButton>
  );

export { Button };
