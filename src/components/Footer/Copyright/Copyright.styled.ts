import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, devices } }) => ({
  borderTop: `3px solid ${colors.beige}`,
  color: "white",
  height: 65,
  lineHeight: "60px",
  textAlign: "center",

  [devices.mobile]: {
    fontSize: 16,
  },
}));
