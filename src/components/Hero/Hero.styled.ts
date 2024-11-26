import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors } }) => ({
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

export const StyledTitle = styled.h1(({ theme: { font } }) => ({
  color: "white",
  position: "absolute",
  textAlign: "center",
  textTransform: "uppercase",
  width: "100%",
  ...font(40, "semiBold", "inherit"),
}));
