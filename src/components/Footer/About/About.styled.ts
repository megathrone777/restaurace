import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { font } }) => ({
  color: "white",
  maxWidth: 350,
  textTransform: "capitalize",

  ...font(17, "normal"),
}));
