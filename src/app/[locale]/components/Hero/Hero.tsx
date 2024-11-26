"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { SwiperProps } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { Button } from "~/theme/components";
import type { TSliderItem } from "./Hero.types";
import { items } from "./Hero.data";
import {
  StyledWrapper,
  StyledSlider,
  StyledSlide,
  StyledButtons,
  StyledImage,
  StyledContent,
  StyledTitle,
  StyledText,
} from "./Hero.styled";

const sliderOptions: SwiperProps = {
  autoplay: {
    delay: 6000,
    pauseOnMouseEnter: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  modules: [Autoplay, EffectFade],
  slidesPerView: 1,
  speed: 2000,
};

const Hero: React.FC = () => {
  const t = useTranslations();
  const [key, setKey] = useState<number>(Math.random());

  const handleSlideChangeTransitionStart = (): void => {
    setKey(Math.random());
  };

  return (
    <StyledWrapper>
      {items && !!items.length && (
        <StyledSlider
          {...sliderOptions}
          onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
        >
          {items.map(
            (
              { image, text, title }: TSliderItem,
              index: number
            ): React.ReactElement => (
              <StyledSlide key={`hero-slide-${index}`}>
                <StyledImage alt="U Dlabacu." src={`/images/slider/${image}`} />

                <StyledContent>
                  <StyledTitle key={`${key}-title-${index}`}>
                    {title}
                  </StyledTitle>

                  <StyledText key={`${key}-text-${index}`}>{text}</StyledText>

                  <StyledButtons key={`${key}-buttons-${index}`}>
                    <Button href="/reservation">{t("reservation.title")}</Button>
                  </StyledButtons>
                </StyledContent>
              </StyledSlide>
            )
          )}
        </StyledSlider>
      )}
    </StyledWrapper>
  );
};

export { Hero };
