import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { devices } }) => ({
  backgroundColor: "rgba(0, 0, 0, .6)",
  height: 80,
  position: "sticky",
  transition: "background-color .5s ease-in-out",
  top: 0,
  zIndex: 900,

  [devices.desktop]: {
    height: 70,
  },

  [devices.tablet]: {
    backgroundColor: "rgba(0, 0, 0, .8)",
  },

  "&.scrolled": {
    backgroundColor: "black",
  },
}));

export const StyledLayout = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  height: "100%",
});

export const StyledContent = styled.div(({ theme: { colors, devices } }) => ({
  alignItems: "center",
  columnGap: 70,
  display: "flex",

  [devices.desktop]: {
    columgGap: 50,
  },

  [devices.tablet]: {
    backgroundColor: "black",
    bottom: 0,
    flexDirection: "column-reverse",
    height: "100%",
    justifyContent: "center",
    left: 0,
    opacity: 0,
    position: "fixed",
    right: 0,
    rowGap: 50,
    top: 0,
    transitionDuration: ".3s",
    transitionProperty: "opacity, visibility",
    transitionTimingFunction: "ease-in-out",
    visibility: "hidden",
    width: "100%",
    zIndex: 800,

    "&.opened": {
      opacity: 1,
      visibility: "visible",
    },
  },
}));

export const StyledBurgerHelper = styled.span(({ theme: { colors } }) => ({
  backgroundColor: colors.beige,
  borderRadius: 10,
  display: "block",
  height: 4,
  marginInline: "auto",
  position: "relative",
  transformOrigin: 1,
  transition: "transform 0.2s linear, left 0.1s linear",
  userSelect: "none",
  width: 35,
}));

export const StyledBurger = styled.button(({ theme: { devices } }) => ({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  display: "none",
  flexDirection: "column",
  height: 45,
  justifyContent: "space-evenly",
  overflow: "hidden",
  padding: 0,
  position: "relative",
  width: 45,
  zIndex: 901,

  [devices.tablet]: {
    display: "flex",
  },

  "&:focus": {
    outline: "none",
  },

  [StyledBurgerHelper]: {
    willChange: "transform",

    "&:first-of-type": {
      left: 0,
      transform: "rotate(0)",
      width: 37,
    },

    "&:nth-of-type(2)": {
      opacity: 1,
      transform: "translateX(0)",
    },

    "&:last-of-type": {
      left: 0,
      transform: "rotate(0)",
      width: 37,
    },
  },

  [`&.opened > ${StyledBurgerHelper}`]: {
    "&:first-of-type": {
      left: 5,
      transform: "rotate(45deg)",
    },

    "&:nth-of-type(2)": {
      opacity: 0,
      transform: "translateX(20px)",
    },

    "&:last-of-type": {
      left: 5,
      transform: "rotate(-45deg)",
    },
  },
}));
