import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors } }) => ({
  borderTop: `1px solid ${colors.orange}`,
  color: "white",
  height: 60,
  lineHeight: "60px",
  textAlign: "center",
}));
