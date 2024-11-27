import Link from "next/link";

import { styled } from "~/theme";

export const StyledWrapper = styled.div({
  height: "100%",
  paddingBlock: 12,
  position: "relative",
  zIndex: 901,
});

export const StyledLink = styled(Link)({
  color: "white",
  display: "block",
  height: "100%",

  "&:focus": {
    outline: "none",
  },
});

export const StyledImage = styled.img(({ theme: { devices } }) => ({
  height: "100%",
  width: 130,

  [devices.desktop]: {
    width: 110,
  },
}));
