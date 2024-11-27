import React, { useState } from "react";

import { Icon } from "~/theme/components";
import type { TProps } from "./Input.types";
import {
  StyledWrapper,
  StyledIcon,
  StyledInput,
  StyledError,
} from "./Input.styled";

const Input: React.FC<TProps> = ({ error, iconID, type, ...rest }) => {
  const [currentType, setCurrentType] = useState<typeof type>(
    type === "date" ? "text" : type === "time" ? "text" : type
  );
  const hasError = Boolean(error);

  const handleInputFocus = (): void => {
    if (type === "date") {
      setCurrentType("date");
    }

    if (type === "time") {
      setCurrentType("time");
    }
  };

  return (
    <StyledWrapper>
      {iconID && (
        <StyledIcon className={hasError ? "error" : ""}>
          <Icon id={iconID} />
        </StyledIcon>
      )}

      <StyledInput
        className={hasError ? "error" : ""}
        onFocus={handleInputFocus}
        type={currentType}
        {...rest}
      />
      {hasError && <StyledError>{error}</StyledError>}
    </StyledWrapper>
  );
};

export { Input };
