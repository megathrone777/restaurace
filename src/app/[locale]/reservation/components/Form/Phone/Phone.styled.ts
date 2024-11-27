import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { devices } }) => ({
  height: 56,
  marginBottom: 30,
  position: "relative",
  zIndex: 200,

  [devices.desktop]: {
    height: 50,
    marginBottom: 20,
  },

  [devices.tablet]: {
    marginBottom: 15,
  },
}));

export const StyledLabel = styled.label({
  backgroundColor: "transparent",
  cursor: "pointer",
  position: "absolute",
  left: 12,
  top: "50%",
  transform: "translateY(-50%)",
  width: 29,
  zIndex: 30,
});

export const StyledFlag = styled.img({
  display: "block",
  maxWidth: "100%",
});
