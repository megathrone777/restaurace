import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors } }) => ({
  backgroundColor: colors.white,
  paddingBlock: 50,
  textAlign: "center",
}));

export const StyledTitle = styled.h2({
  fontSize: 40,
  marginBottom: 25,
});

export const StyledLayout = styled.div({
  fontSize: 20,
  marginInline: "auto",
  maxWidth: 800,

  "& > p": {
    marginBottom: 15,
  },
});
