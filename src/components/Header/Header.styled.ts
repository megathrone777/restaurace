import { styled } from "~/theme";

export const StyledWrapper = styled.div({
  backgroundColor: "rgba(0, 0, 0, .6)",
  height: 80,
  position: "sticky",
  transition: "background-color .5s ease-in-out",
  top: 0,
  zIndex: 900,

  "&.scrolled": {
    backgroundColor: "black",
  },
});

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
