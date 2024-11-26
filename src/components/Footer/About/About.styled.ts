import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { font } }) => ({
  color: "white",
  maxWidth: 350,

  ...font(17, "normal"),

  "& > p": {
    marginTop: 15,
  },
}));
