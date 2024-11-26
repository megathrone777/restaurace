import { styled } from "~/theme";

export const StyledWrapper = styled.div({
  backgroundColor: "white",
  marginInline: "auto",
  maxWidth: 580,
  paddingBlock: 50,
  textAlign: "center",
});

export const StyledForm = styled.form({});

export const StyledLayout = styled.div({
  marginBottom: 45,
});

export const StyledTitle = styled.h2(({ theme: { font } }) => ({
  lineHeight: "1.2",
  marginBottom: 20,
  textAlign: "center",
  ...font(28, "medium", "inherit"),
}));

export const StyledHint = styled.p({
  fontSize: 20,
  lineHeight: 1.2,
  marginBottom: 25,
  textAlign: "center",
});

export const StyledLabel = styled.label({
  cursor: "pointer",
  display: "inline-block",
  userSelect: "none",
});
