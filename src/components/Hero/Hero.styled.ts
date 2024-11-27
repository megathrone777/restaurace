import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, devices } }) => ({
  alignItems: "center",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  borderBottom: `3px solid ${colors.beige}`,
  display: "flex",
  height: 340,
  justifyContent: "center",
  marginTop: -80,
  paddingTop: 80,
  overflow: "hidden",
  position: "relative",

  [devices.desktop]: {
    height: 280,
  },

  [devices.tablet]: {
    height: 250,
  },

  [devices.mobile]: {
    height: 220,
  },

  "&::before": {
    backgroundColor: "rgba(0, 0, 0, .4)",
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
}));

export const StyledTitle = styled.h1(({ theme: { devices, font } }) => ({
  color: "white",
  position: "absolute",
  textAlign: "center",
  textTransform: "uppercase",
  width: "100%",
  ...font(40, "semiBold", "inherit"),

  [devices.desktop]: {
    fontSize: 35,
  },

  [devices.tablet]: {
    fontSize: 30,
  },

  [devices.mobile]: {
    fontSize: 25,
  },
}));

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
    top: 90,
  },

  [devices.tablet]: {
    fontSize: 14,
    top: 85,
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
