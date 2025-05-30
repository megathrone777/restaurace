"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { SwiperProps } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { Socials } from "~/components";
import { Button } from "~/theme/components";
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
  StyledFlagWrapper,
  StyledFlag,
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
            (item: string, index: number): React.ReactElement => (
              <StyledSlide key={`hero-slide-${index}`}>
                <StyledImage alt="U Dlabacu." src={`/images/slider/${item}`} />

                <StyledContent>
                  <StyledTitle key={`${key}-title-${index}`}>
                    {t("hero.title")}
                  </StyledTitle>

                  <StyledText key={`${key}-text-${index}`}>
                    {t("hero.text")}
                  </StyledText>

                  {/* <StyledText
                    dangerouslySetInnerHTML={{ __html: t.raw("newYear") }}
                    key={`${key}-subtext-${index}`}
                  /> */}

                  <StyledButtons key={`${key}-buttons-${index}`}>
                    <Button href="/reservation">
                      {t("reservation.title")}
                    </Button>

                    <Socials />
                  </StyledButtons>
                </StyledContent>
              </StyledSlide>
            )
          )}
        </StyledSlider>
      )}

      <StyledFlagWrapper>
        <StyledFlag
          alt="Support Ukraine."
          src="/images/ukraine_img.png"
          title={t("support")}
        />
        <span>{t("support")}</span>
      </StyledFlagWrapper>
    </StyledWrapper>
  );
};

export { Hero };
