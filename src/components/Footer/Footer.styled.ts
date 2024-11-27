import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors } }) => ({
  backgroundColor: colors.blue,
  minHeight: 300,
  overflow: "hidden",
  position: "relative",
}));

export const StyledLayout = styled.div(({ theme: { devices } }) => ({
  columnGap: 40,
  display: "flex",
  justifyContent: "space-between",
  paddingBlock: 50,
  position: "relative",

  [devices.desktop]: {
    columnGap: 20,
    paddingBlock: 40,
  },

  [devices.tablet]: {
    flexWrap: "wrap",
    rowGap: 40,
  },

  [devices.mobile]: {
    flexDirection: "column",
    rowGap: 50,
  },
}));

export const StyledColumn = styled.div(({ theme: { devices } }) => ({
  flex: "0 1 25%",

  [devices.tablet]: {
    flex: "0 1 calc(50% - 20px)",
  },

  [devices.mobile]: {
    flex: "none",
  },
}));

export const StyledTitle = styled.h2(({ theme: { devices, font } }) => ({
  color: "white",
  marginBottom: 10,
  textTransform: "uppercase",
  ...font(24, "medium"),

  [devices.desktop]: {
    fontSize: 20,
  },
}));
