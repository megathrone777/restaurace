import React from "react";

import type { TProps } from "./Button.types";
import { StyledButton } from "./Button.styled";

const Button: React.FC<TProps> = ({ children, type }) => (
  <StyledButton {...{ type }}>{children}</StyledButton>
);

export { Button };
