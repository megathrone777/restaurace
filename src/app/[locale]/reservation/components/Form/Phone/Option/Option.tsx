import React from "react";
import { components, type OptionProps } from "react-select";
import { getCountryFlag } from "use-telephone";

import type { TOption } from "./Option.types";
import { StyledWrapper, StyledIcon } from "./Option.styled";

const Option: React.FC<OptionProps<TOption, false>> = (props) => {
  const { data } = props;

  return (
    <components.Option {...props}>
      <StyledWrapper>
        <StyledIcon alt={data.code} src={getCountryFlag(data.code)} />
        <span>{data.name}</span>
      </StyledWrapper>
    </components.Option>
  );
};

export { Option };
