"use client";
import type { DefaultTheme } from "styled-components";

import { colors, fonts } from "./variables";

const theme: DefaultTheme = {
  colors,

  font: (size, weight, family) => ({
    fontFamily: family,
    fontSize: size,
    fontWeight: fonts[weight],
  }),

  hover: (css) => ({
    "@media (hover: hover) and (pointer: fine)": {
      "&:hover": {
        ...css,
      },
    },
  }),

  placeholder: (css) => ({
    "&::-webkit-input-placeholder": {
      ...css,
    },

    "&:-moz-placeholder": {
      ...css,
    },

    "&::-moz-placeholder": {
      ...css,
    },

    "&:-ms-input-placeholder": {
      ...css,
    },
  }),
};

export { css, keyframes, styled, useTheme } from "styled-components";
export { GlobalStyle } from "./GlobalStyle";
export { theme };
