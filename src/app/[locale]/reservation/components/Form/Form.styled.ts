import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, devices } }) => ({
  backgroundColor: "white",
  borderBottom: `3px solid ${colors.beige}`,
  minHeight: 300,
  paddingBlock: 50,
  position: "relative",
  textAlign: "center",

  [devices.desktop]: {
    paddingBlock: 30,
  },

  [devices.tablet]: {
    minHeight: 0,
    paddingBlock: 20,
  },
}));

export const StyledForm = styled.form({
  marginInline: "auto",
  maxWidth: 580,
});

export const StyledLayout = styled.div(({ theme: { devices } }) => ({
  marginBottom: 45,

  [devices.desktop]: {
    marginBottom: 30,
  },

  [devices.desktop]: {
    marginBottom: 20,
  },
}));

export const StyledTitle = styled.h2(({ theme: { devices, font } }) => ({
  lineHeight: "1.2",
  marginBottom: 20,
  textAlign: "center",
  ...font(28, "medium", "inherit"),

  [devices.desktop]: {
    fontSize: 26,
    marginBottom: 15,
  },

  [devices.tablet]: {
    fontSize: 23,
    marginBottom: 10,
  },
}));

export const StyledHint = styled.p(({ theme: { devices } }) => ({
  fontSize: 20,
  lineHeight: 1.2,
  marginBottom: 25,
  textAlign: "center",

  [devices.desktop]: {
    fontSize: 18,
    marginBottom: 20,
  },

  [devices.tablet]: {
    fontSize: 17,
    marginBottom: 15,
  },
}));
