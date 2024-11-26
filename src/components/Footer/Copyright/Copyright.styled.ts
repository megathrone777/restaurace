import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors } }) => ({
  borderTop: `3px solid ${colors.beige}`,
  color: "white",
  height: 65,
  lineHeight: "60px",
  textAlign: "center",
}));
