import { Link } from "~/i18n/routing";
import { css, styled } from "~/theme";

const defaults = css(({ theme: { colors, devices, font, hover } }) => ({
  backgroundColor: colors.beige,
  borderRadius: 5,
  color: "white",
  display: "inline-block",
  height: 52,
  minWidth: 197,
  paddingInline: 10,
  textTransform: "uppercase",
  transition: "background-color .3s ease",

  ...font(19, "normal", "inherit"),

  ...hover({
    backgroundColor: colors.blue,
  }),

  [devices.desktop]: {
    fontSize: 17,
    height: 48,
    minWidth: 175,
  },
}));

export const StyledButton = styled.button(
  {
    appearance: "none",
    border: "none",
    cursor: "pointer",
  },
  defaults
);

export const StyledLink = styled(Link)(
  ({ theme: { devices } }) => ({
    lineHeight: "52px",
    textAlign: "center",
    textDecoration: "none",

    [devices.desktop]: {
      lineHeight: "48px",
    },
  }),
  defaults
);
