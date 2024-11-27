import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, devices } }) => ({
  borderBottom: `3px solid ${colors.beige}`,
  height: 350,

  [devices.tablet]: {
    height: 260,
  },
}));

export const StyledIframe = styled.iframe({
  height: "calc(100% + 2px)",
  marginTop: -1,
  width: "100%",
});
