import React from "react";

import type { TProps } from "./Textarea.types";
import { StyledWrapper, StyledTextarea, StyledError } from "./Textarea.styled";

const Textarea: React.FC<TProps> = ({ error, ...rest }) => {
  const hasError = Boolean(error);

  return (
    <StyledWrapper>
      <StyledTextarea className={hasError ? "error" : ""} {...rest} />
      {hasError && <StyledError>{error}</StyledError>}
    </StyledWrapper>
  );
};

export { Textarea };
