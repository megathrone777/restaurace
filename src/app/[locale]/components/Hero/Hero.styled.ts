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
    transform: "translate3d(0px, 100%, 0px)",
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

export const StyledWrapper = styled.div(({ theme: { colors } }) => ({
  borderBottom: `3px solid ${colors.beige}`,
  height: "calc(100vh + 2px)",
  marginTop: -80,
  maxHeight: 1100,
  overflow: "hidden",
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

export const StyledContent = styled.div({
  left: 0,
  marginInline: "auto",
  maxWidth: 1480,
  paddingInline: 10,
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
});

export const StyledTitle = styled.h2(
  ({ theme: { font } }) => ({
    ...fadeInDefaults,
    animationDelay: "0.2s",
    color: "white",
    lineHeight: "1.2",
    marginBottom: 10,
    textTransform: "uppercase",
    ...font(70, "semiBold"),
  }),
  () => css`
    animation-name: ${fadeInDown};
  `
);

export const StyledText = styled.p(
  ({ theme: { font } }) => ({
    ...fadeInDefaults,
    animationDelay: "0.4s",
    color: "white",
    lineHeight: "1.2",
    marginBottom: 30,
    textTransform: "uppercase",
    ...font(29, "medium"),
  }),
  () => css`
    animation-name: ${fadeInDown};
  `
);

export const StyledButtons = styled.div(
  {
    ...fadeInDefaults,
    animationDelay: "0.8s",
  },
  () => css`
    animation-name: ${fadeInUp};
  `
);

export const StyledFlag = styled.img({
  left: 20,
  maxHeight: 40,
  position: "absolute",
  top: 100,
  zIndex: 300,
});
