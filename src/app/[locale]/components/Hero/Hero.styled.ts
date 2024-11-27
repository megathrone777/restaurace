import { Swiper, SwiperSlide } from "swiper/react";
import type { CSSObject } from "styled-components";

import { css, keyframes, styled } from "~/theme";

const fadeInDown = keyframes({
  "0%": {
    opacity: 0,
    transform: "translate3d(0px, -30px, 0px)",
  },

  "100%": {
    opacity: 1,
  },
});

const fadeInUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translate3d(0px, 50%, 0px)",
  },

  "100%": {
    opacity: 1,
    transform: "none",
  },
});

const fadeInDefaults: CSSObject = {
  animationFillMode: "both",
  animationDuration: "1s",
};

export const StyledWrapper = styled.div(({ theme: { colors, devices } }) => ({
  borderBottom: `3px solid ${colors.beige}`,
  height: "calc(100vh + 3px)",
  marginTop: -80,
  maxHeight: 1100,
  overflow: "hidden",

  [devices.desktop]: {
    height: "80vh",
  },

  [devices.tablet]: {
    height: 400,
  },
}));

export const StyledSlider = styled(Swiper)({
  height: "100%",
});

export const StyledSlide = styled(SwiperSlide)({
  height: "100%",

  "&::before": {
    backgroundColor: "rgba(0, 0, 0, .5)",
    bottom: 0,
    content: "''",
    display: "block",
    height: "100%",
    left: 0,
    right: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
});

export const StyledImage = styled.img({
  display: "block",
  height: "100%",
  objectFit: "cover",
  width: "100%",
});

export const StyledContent = styled.div(({ theme: { devices } }) => ({
  left: 0,
  marginInline: "auto",
  maxWidth: 1480,
  paddingInline: 10,
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",

  [devices.desktop]: {
    top: "calc(50% + 40px)",
  },
}));

export const StyledTitle = styled.h2(
  ({ theme: { devices, font } }) => ({
    ...fadeInDefaults,
    animationDelay: "0.2s",
    color: "white",
    lineHeight: "1.2",
    marginBottom: 10,
    textTransform: "uppercase",
    ...font(70, "semiBold"),
    whiteSpace: "nowrap",

    [devices.desktop]: {
      fontSize: 55,
    },

    [devices.tablet]: {
      fontSize: 36,
    },
  }),
  () => css`
    animation-name: ${fadeInDown};
  `
);

export const StyledText = styled.p(
  ({ theme: { devices, font } }) => ({
    ...fadeInDefaults,
    animationDelay: "0.4s",
    color: "white",
    lineHeight: "1.2",
    marginBottom: 30,
    textTransform: "uppercase",
    ...font(29, "medium"),

    [devices.desktop]: {
      fontSize: 22,
    },

    [devices.tablet]: {
      fontSize: 18,
    },
  }),
  () => css`
    animation-name: ${fadeInDown};
  `
);

export const StyledButtons = styled.div(
  {
    ...fadeInDefaults,
    alignItems: "flex-start",
    animationDelay: "0.8s",
    display: "flex",
    flexDirection: "column",
    rowGap: 30,
  },
  () => css`
    animation-name: ${fadeInUp};
  `
);

export const StyledFlagWrapper = styled.div(({ theme: { devices } }) => ({
  color: "white",
  fontSize: 17,
  left: 20,
  lineHeight: "40px",
  position: "absolute",
  top: 100,
  zIndex: 300,

  [devices.desktop]: {
    fontSize: 16,
    left: 10,
    lineHeight: "30px",
    top: 80,
  },

  [devices.tablet]: {
    fontSize: 14,
  },
}));

export const StyledFlag = styled.img(({ theme: { devices } }) => ({
  marginRight: 10,
  maxHeight: 40,
  verticalAlign: "middle",

  [devices.desktop]: {
    maxHeight: 30,
  },

  [devices.tablet]: {
    maxHeight: 20,
  },
}));
