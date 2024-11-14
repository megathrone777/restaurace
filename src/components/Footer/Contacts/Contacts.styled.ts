import { styled } from "~/theme";

export const StyledList = styled.ul({});

export const StyledItem = styled.li({
  height: 45,
  lineHeight: "45px",
});

export const StyledLink = styled.a(({ theme: { colors, font, hover } }) => ({
  alignItems: "center",
  color: "white",
  display: "inline-flex",
  height: "100%",
  textDecoration: "none",
  transition: "color .3s ease",

  ...hover({
    color: colors.orange,
  }),

  ...font(18, "normal"),
}));

export const StyledIcon = styled.i(({ theme: { colors } }) => ({
  color: colors.orange,
  display: "inline-flex",
  height: 24,
  marginRight: 6,
  minWidth: 24,
  width: 24,
}));
