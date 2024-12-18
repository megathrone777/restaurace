import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, devices } }) => ({
  borderBottom: `3px solid ${colors.beige}`,
  minHeight: 400,
  paddingBlock: 50,

  [devices.desktop]: {
    paddingBlock: 30,
  },

  [devices.tablet]: {
    paddingBlock: 20,
  },
}));

export const StyledList = styled.ul(({ theme: { devices } }) => ({
  alignItems: "flex-start",
  gap: 20,
  display: "flex",
  flexWrap: "wrap",

  [devices.mobile]: {
    columnGap: 10,
  },
}));

export const StyledItem = styled.li(({ theme: { devices } }) => ({
  cursor: "pointer",
  flex: "0 1 calc(20% - 16px)",

  [devices.desktop]: {
    flex: "0 1 calc(25% - 15px)",
  },

  [devices.tablet]: {
    flex: "0 1 calc(33.3333% - 14px)",
  },

  [devices.mobile]: {
    flex: "0 1 calc(50% - 5px)",
  },
}));

export const StyledImageHolder = styled.div({
  height: 400,
  marginBottom: 5,
  position: "relative",

  "&::before": {
    // backgroundColor: "rgba(0, 0, 0, .3)",
    bottom: 0,
    content: "''",
    display: "block",
    height: "100%",
    left: 0,
    right: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
});

export const StyledTitle = styled.p(({ theme: { font } }) => ({
  ...font(19, "medium"),
}));

export const StyledImage = styled.img({
  height: "100%",
  objectFit: "cover",
  width: "100%",
});
