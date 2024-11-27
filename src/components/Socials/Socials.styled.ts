import { styled } from "~/theme";

export const StyledList = styled.ul({
  columnGap: 20,
  display: "flex",
});

export const StyledLink = styled.a(({ theme: { colors, hover } }) => ({
  color: "white",
  display: "block",
  height: 30,
  transition: "color .15s ease-in-out",
  width: 30,

  ...hover({
    color: colors.beige,
  }),
}));
