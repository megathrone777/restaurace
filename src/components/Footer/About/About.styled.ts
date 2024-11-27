import { styled } from "~/theme";

export const StyledWrapper = styled.div(
  ({ theme: { colors, devices, font, hover } }) => ({
    color: "white",
    maxWidth: 320,

    ...font(17, "normal"),

    "& > p": {
      marginTop: 15,

      "& > a": {
        color: colors.beige,
        fontWeight: 500,
        textDecoration: "underline",
        transition: "color .15s ease-in-out",

        ...hover({
          textDecoration: "none",
        }),
      },
    },

    [devices.desktop]: {
      fontSize: 16,
    },

    [devices.mobile]: {
      marginTop: 10,
      maxWidth: "100%",
    },
  })
);
