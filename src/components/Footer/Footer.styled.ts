import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors } }) => ({
  backgroundColor: colors.green,
  minHeight: 300,
  overflow: "hidden",
  position: "relative",
}));

export const StyledLayout = styled.div({
  display: "flex",
  paddingBlock: 50,
  position: "relative",
});

export const StyledColumn = styled.div({
  flex: "0 1 25%",
});

export const StyledTitle = styled.h2(({ theme: { font } }) => ({
  color: "white",
  marginBottom: 10,
  textTransform: "uppercase",
  ...font(24, "medium"),
}));
