import { styled } from "~/theme";

export const StyledWrapper = styled.div({
  alignItems: "center",
  display: "flex",
  height: 180,
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
});

export const StyledTitle = styled.h1(({ theme: { font } }) => ({
  color: "white",
  position: "absolute",
  textAlign: "center",
  textTransform: "uppercase",
  width: "100%",
  ...font(40, "semiBold", "inherit"),
}));

export const StyledImage = styled.img({
  height: "100%",
  objectFit: "cover",
  width: "100%",
});
