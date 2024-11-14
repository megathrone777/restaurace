import { styled } from "~/theme";

export const StyledButton = styled.button(
  ({ theme: { colors, font, hover } }) => ({
    appearance: "none",
    backgroundColor: colors.orange,
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "inline-block",
    height: 50,
    minWidth: 197,
    paddingInline: 10,
    textTransform: "uppercase",
    transition: "background-color .3s ease",

    ...font(16, "medium", "inherit"),

    ...hover({
      backgroundColor: colors.greenDarker,
    }),
  })
);
