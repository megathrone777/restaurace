import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, devices } }) => ({
  borderBottom: `3px solid ${colors.beige}`,
  paddingBlock: 50,
  textAlign: "center",

  [devices.desktop]: {
    paddingBlock: 30,
  },

  [devices.tablet]: {
    paddingBlock: 20,
  },
}));

export const StyledTitle = styled.h2(({ theme: { devices } }) => ({
  fontSize: 40,
  marginBottom: 25,

  [devices.desktop]: {
    fontSize: 35,
  },

  [devices.tablet]: {
    fontSize: 32,
    marginBottom: 15,
  },
}));

export const StyledLayout = styled.div(
  ({ theme: { colors, devices, hover } }) => ({
    fontSize: 20,
    marginInline: "auto",
    maxWidth: 900,

    "& > p": {
      marginBottom: 15,

      [devices.desktop]: {
        fontSize: 17,
        marginBottom: 10,
      },

      [devices.tablet]: {
        fontSize: 16,
      },

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
  })
);
