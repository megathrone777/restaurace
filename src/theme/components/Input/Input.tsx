import React from "react";

import { Icon } from "~/theme/components";
import type { TProps } from "./Input.types";
import {
  StyledWrapper,
  StyledIcon,
  StyledInput,
  StyledError,
} from "./Input.styled";

const Input: React.FC<TProps> = ({ error, iconID, type, ...rest }) => {
  const hasError = Boolean(error);

  return (
    <StyledWrapper>
      {iconID && (
        <StyledIcon className={hasError ? "error" : ""}>
          <Icon id={iconID} />
        </StyledIcon>
      )}

      <StyledInput className={hasError ? "error" : ""} type={type} {...rest} />
      {hasError && <StyledError>{error}</StyledError>}
    </StyledWrapper>
  );
};

export { Input };
