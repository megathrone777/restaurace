import Link from "next/link";

import { styled } from "~/theme";

export const StyledWrapper = styled.div({
  height: "100%",
  paddingBlock: 12,
});

export const StyledLink = styled(Link)({
  color: "white",
  display: "block",
  height: "100%",

  "&:focus": {
    outline: "none",
  },
});

export const StyledImage = styled.img({
  height: "100%",
});
