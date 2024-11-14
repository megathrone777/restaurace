import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors } }) => ({
  backgroundColor: "transparent",
  height: 80,
  position: "sticky",
  transition: "background-color .5s ease-in-out",
  top: 0,
  zIndex: 900,

  "&.scrolled": {
    backgroundColor: colors.green,
  },
}));

export const StyledLayout = styled.div({
  display: "flex",
  justifyContent: "space-between",
  height: "100%",
});

export const StyledContent = styled.div({
  alignItems: "center",
  columnGap: 70,
  display: "flex",
});
