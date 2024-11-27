import { Link } from "~/i18n/routing";
import { styled } from "~/theme";

export const StyledWrapper = styled.div({});

export const StyledList = styled.ul(({ theme: { devices } }) => ({
  columnGap: 60,
  display: "flex",

  [devices.desktop]: {
    columnGap: 50,
  },

  [devices.tablet]: {
    alignItems: "center",
    columnGap: "unset",
    flexDirection: "column",
    rowGap: 30,
  },
}));

export const StyledLink = styled(Link)(
  ({ theme: { colors, devices, font, hover } }) => ({
    color: "white",
    transition: "color .15s ease-in-out",
    textDecoration: "none",
    textTransform: "uppercase",

    "&.active": {
      color: colors.beige,
    },

    ...font(17, "medium"),

    ...hover({
      color: colors.beige,
    }),

    [devices.desktop]: {
      fontSize: 16,
    },

    [devices.tablet]: {
      fontSize: 24,
    },
  })
);
