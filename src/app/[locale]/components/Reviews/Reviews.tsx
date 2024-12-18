"use client";
import React from "react";
import Rating from "react-star-ratings";
import { type SwiperProps } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";

import { useTheme } from "~/theme";
import { Container, Icon } from "~/theme/components";
import { items } from "./Reviews.data";
import { TSliderItem } from "./Reviews.types";
import {
  StyledWrapper,
  StyledTitle,
  StyledSlider,
  StyledSlide,
  StyledLayout,
  StyledHeader,
  StyledText,
  StyledIcon,
  StyledAuthor,
  StyledDate,
} from "./Reviews.styled";

const sliderOptions: SwiperProps = {
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    1480: {
      slidesPerView: 5,
    },
    1250: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
  },
  effect: "slide",
  loop: true,
  modules: [Autoplay],
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
};

const Reviews: React.FC = () => {
  const { colors } = useTheme();
  const t = useTranslations();

  return (
    <StyledWrapper>
      <Container>
        <StyledTitle>{t("reviews.title")}</StyledTitle>

        {items && !!items.length && (
          <StyledSlider {...sliderOptions}>
            {items.map(
              (
                { author, date, rating, text, type }: TSliderItem,
                index: number
              ): React.ReactElement => (
                <StyledSlide key={`reviews-slide-${index}`}>
                  <StyledLayout>
                    <StyledHeader>
                      <div>
                        <StyledAuthor>{author}</StyledAuthor>
                        <StyledDate>{date}</StyledDate>
                      </div>

                      <StyledIcon
                        title={`${type.charAt(0).toUpperCase()}${type.slice(
                          1
                        )}`}
                      >
                        <Icon id={type} />
                      </StyledIcon>
                    </StyledHeader>

                    <StyledText>{text}</StyledText>
                  </StyledLayout>

                  <Rating
                    {...{ rating }}
                    starDimension="32px"
                    starRatedColor={colors.beige}
                    starSpacing="2px"
                  />
                </StyledSlide>
              )
            )}
          </StyledSlider>
        )}
      </Container>
    </StyledWrapper>
  );
};

export { Reviews };
