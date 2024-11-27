import { styled } from "~/theme";

export const StyledText = styled.span(({ theme: { devices, font } }) => ({
  color: "white",
  lineHeight: "45px",
  ...font(18, "normal"),

  [devices.desktop]: {
    fontSize: 16,
  },
}));

export const StyledIcon = styled.i(({ theme: { colors } }) => ({
  color: colors.beige,
  display: "inline-flex",
  height: 24,
  marginRight: 6,
  minWidth: 24,
  verticalAlign: "middle",
  width: 24,
}));
