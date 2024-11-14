import { Link } from "~/navigation";
import { styled } from "~/theme";

export const StyledWrapper = styled.div({});

export const StyledList = styled.ul({
  columnGap: 60,
  display: "flex",
});

export const StyledLink = styled(Link)(
  ({ theme: { colors, font, hover } }) => ({
    color: "white",
    transition: "color .15s ease-in-out",
    textDecoration: "none",
    textTransform: "uppercase",

    "&.active": {
      color: colors.orange,
    },

    ...font(17, "medium"),

    ...hover({
      color: colors.orange,
    }),
  })
);
