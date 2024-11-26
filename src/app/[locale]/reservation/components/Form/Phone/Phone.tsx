import React, { useEffect } from "react";
import ReactSelect, { type ActionMeta, type SingleValue } from "react-select";
import { getCountryCallingCode } from "libphonenumber-js";
import { countries, useTelephone } from "use-telephone";

import { useTheme } from "~/theme";
import { Input } from "~/theme/components";
import { Option, type TOption } from "./Option";
import type { TProps } from "./Phone.types";
import { StyledWrapper, StyledLabel, StyledFlag } from "./Phone.styled";

const Phone: React.FC<TProps> = ({ error, id, onBlur, onChange }) => {
  const { colors } = useTheme();
  const telephone = useTelephone({
    initialValue: `+${getCountryCallingCode("CZ")}`,
  });

  const handleCountryChange = (
    newValue: SingleValue<TOption>,
    _: ActionMeta<TOption>
  ): void => {
    if (newValue) {
      const { code } = newValue;

      telephone.onChangeCountry(code);
    }
  };

  useEffect((): void => {
    if (telephone.parsed) {
      const { countryCallingCode, nationalNumber } = telephone.parsed;

      onChange(`+${countryCallingCode}${nationalNumber}`);
    }
  }, [telephone.value]);

  useEffect((): void => {
    telephone.onChangeCountry("CZ");
  }, []);

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={id}>
        <StyledFlag alt="Country flag." src={telephone.flag} />
      </StyledLabel>

      {countries && !!countries.length && (
        <ReactSelect
          closeMenuOnScroll
          controlShouldRenderValue={false}
          components={{
            Option,
          }}
          isMulti={false}
          inputId={id}
          menuPlacement="bottom"
          onChange={handleCountryChange}
          openMenuOnFocus
          options={countries as TOption[]}
          styles={{
            container: () => ({
              height: 0,
              position: "relative",
              width: "100%",
            }),

            control: () => ({
              border: 0,
              height: 0,
              minHeight: 0,
              overflow: "hidden",
            }),

            menu: (baseStyles) => ({
              ...baseStyles,
              marginTop: 60,
            }),

            menuList: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "white",
              border: `3px solid ${colors.blue}`,
              borderRadius: 5,
              maxHeight: 270,
              padding: 10,
            }),

            option: () => ({
              backgroundColor: "white",
              cursor: "pointer",
              minHeight: 32,

              "&:hover": {
                color: colors.beige,
              },
            }),
          }}
        />
      )}

      <Input
        {...{ onBlur, error }}
        maxLength={telephone.country === "CZ" ? 16 : 100}
        name="phone"
        onChange={telephone.onChange}
        placeholder="(xxx) xxx-xxxx"
        type="tel"
        value={telephone.value}
      />
    </StyledWrapper>
  );
};

export { Phone };
