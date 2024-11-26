import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors } }) => ({
  borderBottom: `3px solid ${colors.beige}`,
  paddingBlock: 50,
  textAlign: "center",
}));

export const StyledTitle = styled.h2({
  fontSize: 40,
  marginBottom: 25,
});

export const StyledLayout = styled.div(({ theme: { colors, hover } }) => ({
  fontSize: 20,
  marginInline: "auto",
  maxWidth: 900,

  "& > p": {
    marginBottom: 15,

    "& > a": {
      color: colors.beige,
      fontWeight: 500,
      textDecoration: "none",
      transition: "color .15s ease-in-out",

      ...hover({
        color: colors.blue,
      }),
    },
  },
}));
