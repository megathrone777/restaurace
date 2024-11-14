import React from "react";

import type { TProps } from "./Container.types";
import { StyledWrapper } from "./Container.styled";

const Container: React.FC<TProps> = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export { Container };
