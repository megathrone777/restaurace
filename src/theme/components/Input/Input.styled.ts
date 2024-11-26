import { styled } from "~/theme";

export const StyledWrapper = styled.div({
  height: 56,
  marginBottom: 30,
  position: "relative",
});

export const StyledInput = styled.input(({ theme: { colors, font } }) => ({
  appearance: "none",
  backgroundColor: "transparent",
  border: `3px solid ${colors.blue}`,
  borderRadius: 5,
  display: "block",
  height: "100%",
  paddingInline: "50px 20px",
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
}));

export const StyledIcon = styled.i({
  display: "block",
  left: 12,
  height: 29,
  maxWidth: 29,
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,

  "&.error": {
    color: "red",
  },
});

export const StyledError = styled.p({
  color: "red",
  fontSize: 14,
  paddingLeft: 10,
  textAlign: "left",
});
