import { Link } from "~/i18n/routing";
import { css, styled } from "~/theme";

const defaults = css(({ theme: { colors, font, hover } }) => ({
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
  {
    lineHeight: "52px",
    textAlign: "center",
    textDecoration: "none",
  },
  defaults
);
