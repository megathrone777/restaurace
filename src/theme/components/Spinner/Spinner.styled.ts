import { css, keyframes, styled } from "~/theme";

const spin = keyframes({
  "0%": {
    transform: "translateY(-50%) rotate(0deg)",
  },

  "100%": {
    transform: "translateY(-50%) rotate(360deg)",
  },
});

export const StyledWrapper = styled.div({
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, .5)",
  bottom: 0,
  display: "flex",
  height: "100%",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
  width: "100%",
  zIndex: 400
});

export const StyledContent = styled.div(
  ({ theme: { colors } }) => ({
    animationDuration: "0.5s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    borderRadius: "50%",
    border: `10px solid ${colors.beige}`,
    borderTopColor: "transparent",
    height: 50,
    marginInline: "auto",
    width: 50,
    zIndex: 10,
  }),

  css`
    animation-name: ${spin};
  `
);
