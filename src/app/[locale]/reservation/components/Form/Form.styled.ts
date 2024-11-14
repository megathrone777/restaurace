import { styled } from "~/theme";

export const StyledWrapper = styled.div({
  backgroundColor: "white",
  marginInline: "auto",
  maxWidth: 450,
  paddingBlock: 30,
  textAlign: "center",
});

export const StyledForm = styled.form({});

export const StyledTitle = styled.h2(({ theme: { font } }) => ({
  lineHeight: "1.2",
  marginBottom: 20,
  textAlign: "center",
  ...font(24, "medium", "inherit"),
}));

export const StyledHint = styled.p({
  lineHeight: 1.2,
  marginBottom: 15,
  textAlign: "center",
});

export const StyledItem = styled.div({
  height: 56,
  marginBottom: 30,
});

export const StyledLabel = styled.label({
  cursor: "pointer",
  display: "inline-block",
  userSelect: "none",
});

export const StyledInput = styled.input(({ theme: { colors, font } }) => ({
  appearance: "none",
  border: `2px solid ${colors.green}`,
  borderRadius: 3,
  display: "block",
  height: "100%",
  paddingInline: 20,
  width: "100%",

  ...font(17, "medium"),
}));

export const StyledSelect = styled.select(({ theme: { colors } }) => ({
  appearance: "none",
  border: `2px solid ${colors.green}`,
  borderRadius: 3,
  cursor: "pointer",
  display: "block",
  height: 34,
  paddingInline: 10,
  width: "100%",
}));
