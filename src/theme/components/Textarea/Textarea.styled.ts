import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { devices } }) => ({
  height: 170,
  marginBottom: 30,
  position: "relative",

  [devices.desktop]: {
    height: 150,
    marginBottom: 20,
  },

  [devices.tablet]: {
    height: 120,
    marginBottom: 18,
  },
}));

export const StyledTextarea = styled.textarea(
  ({ theme: { colors, font } }) => ({
    appearance: "none",
    backgroundColor: "transparent",
    border: `3px solid ${colors.blue}`,
    borderRadius: 5,
    display: "block",
    height: "100%",
    padding: "10px 15px",
    position: "relative",
    transition: "border-color .3s ease-in-out",
    width: "100%",
    zIndex: 2,

    ...font(18, "medium", "var(--font-oswald)"),

    "&:focus": {
      borderColor: colors.beige,
      outline: "none",
    },

    "&.error": {
      borderColor: "red",
    },
  })
);

export const StyledError = styled.p(({ theme: { devices } }) => ({
  color: "red",
  fontSize: 14,
  paddingLeft: 10,
  textAlign: "left",

  [devices.desktop]: {
    fontSize: 12,
  },

  [devices.desktop]: {
    fontSize: 11,
  },
}));
