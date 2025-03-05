import { Swiper, SwiperSlide } from "swiper/react";

import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, devices } }) => ({
  backgroundColor: colors.white,
  borderBottom: `3px solid ${colors.beige}`,
  paddingBlock: "50px 60px",
  textAlign: "center",

  [devices.desktop]: {
    paddingBlock: "30px 40px",
  },

  [devices.tablet]: {
    paddingBlock: "20px 30px",
  },
}));

export const StyledTitle = styled.h2(({ theme: { devices } }) => ({
  fontSize: 40,
  marginBottom: 25,

  [devices.desktop]: {
    fontSize: 35,
  },

  [devices.tablet]: {
    fontSize: 32,
    marginBottom: 15,
  },
}));

export const StyledSlider = styled(Swiper)({
  height: "100%",
});

export const StyledSlide = styled(SwiperSlide)({
  borderRadius: 8,
  border: "1px solid rgba(0, 0, 0, .1)",
  display: "flex",
  flexDirection: "column",
  height: "auto",
  justifyContent: "space-between",
  padding: 20,
  textAlign: "left",
});

export const StyledVideoSlide = styled(SwiperSlide)({
  borderRadius: 8,
  border: "1px solid rgba(0, 0, 0, .1)",
  display: "block",
  height: "auto",
  overflow: "hidden",
});

export const StyledVideo = styled.video({
  display: "block",
  height: "100%",
  width: "100%",
});

export const StyledLayout = styled.div({
  marginBottom: 15,
});

export const StyledHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 10,
});

export const StyledIcon = styled.i({
  display: "block",
  color: "red",
  height: 35,
  width: 35,
});

export const StyledAuthor = styled.p(({ theme: { font } }) => ({
  ...font(19, "medium"),
}));

export const StyledDate = styled.p({
  color: "gray",
  fontSize: 15,
});

export const StyledText = styled.p({
  fontSize: 17,
});
