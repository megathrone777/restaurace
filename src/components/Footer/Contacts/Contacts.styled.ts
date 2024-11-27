import { styled } from "~/theme";

export const StyledList = styled.ul({});

export const StyledItem = styled.li({
  height: 45,
  lineHeight: "45px",
});

export const StyledLink = styled.a(
  ({ theme: { colors, devices, font, hover } }) => ({
    alignItems: "center",
    color: "white",
    display: "inline-flex",
    height: "100%",
    textDecoration: "none",
    transition: "color .3s ease",

    ...hover({
      color: colors.beige,
    }),

    ...font(18, "normal"),

    [devices.desktop]: {
      fontSize: 16,
    },
  })
);

export const StyledIcon = styled.i(({ theme: { colors } }) => ({
  color: colors.beige,
  display: "inline-flex",
  height: 24,
  marginRight: 6,
  minWidth: 24,
  width: 24,
}));
