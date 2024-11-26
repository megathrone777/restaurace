import { Link } from "~/i18n/routing";
import { styled } from "~/theme";

export const StyledWrapper = styled.div({});

export const StyledList = styled.ul({});

export const StyledItem = styled.li({});

export const StyledLink = styled(Link)(
  ({ theme: { colors, font, hover } }) => ({
    color: "white",
    lineHeight: "45px",
    transition: "color .15s ease-in-out",
    textDecoration: "none",
    textTransform: "uppercase",

    "&.active": {
      color: colors.beige,
    },

    "&::before": {
      color: "inherit",
      content: "'-'",
      display: "inline-block",
      marginRight: 10,
      marginTop: -10,
      verticalAlign: "middle",
    },

    ...font(17, "normal"),

    ...hover({
      color: colors.beige,
    }),
  })
);
