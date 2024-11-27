import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { devices } }) => ({
  alignItems: "center",
  columnGap: 10,
  display: "flex",

  [devices.tablet]: {
    columnGap: 25,
  },
}));

export const StyledButton = styled.button(({ theme: { devices } }) => ({
  backgroundColor: "transparent",
  border: "none",
  borderRadius: 2,
  cursor: "pointer",
  height: 18,
  overflow: "hidden",
  padding: 0,
  width: 27,

  [devices.tablet]: {
    transformOrigin: "center",
    transform: "scale(1.3)",
  },
}));
