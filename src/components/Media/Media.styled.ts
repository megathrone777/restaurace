import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, devices } }) => ({
  background: "url(/images/hero/menu_img.jpg) center center/cover no-repeat",
  borderBottom: `3px solid ${colors.beige}`,
  height: 300,
  position: "relative",

  [devices.desktop]: {
    height: 220,
  },

  "&::before": {
    backgroundColor: "rgba(0, 0, 0, .6)",
    bottom: 0,
    content: "''",
    display: "block",
    height: "100%",
    left: 0,
    right: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1,
  },
}));

export const StyledLayout = styled.div({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  position: "relative",
  zIndex: 2,
});
