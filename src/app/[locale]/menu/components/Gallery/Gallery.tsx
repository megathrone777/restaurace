"use client";
import React, { useState } from "react";
import Lightbox, { type SlideImage } from "yet-another-react-lightbox";
import { Captions, Thumbnails } from "yet-another-react-lightbox/plugins";

import { Container } from "~/theme/components";
import { items } from "./Gallery.data";
import {
  StyledWrapper,
  StyledList,
  StyledItem,
  StyledTitle,
  StyledImageHolder,
  StyledImage,
} from "./Gallery.styled";

const Gallery: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  const handleClose = (): void => {
    setIndex(-1);
  };

  const handleClick = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLLIElement>): void => {
    const { index } = currentTarget.dataset!;

    if (index) {
      setIndex(+index);
    }
  };

  return (
    <StyledWrapper>
      <Container>
        {items && !!items.length && (
          <React.Fragment>
            <StyledList>
              {items.map(
                (
                  { alt, src, title }: SlideImage,
                  index: number
                ): React.ReactElement => (
                  <StyledItem
                    data-index={index}
                    key={`gallery-item-${index}`}
                    onClick={handleClick}
                  >
                    <StyledImageHolder>
                      <StyledImage alt={alt} src={src} />
                    </StyledImageHolder>
                    <StyledTitle>{title}</StyledTitle>
                  </StyledItem>
                )
              )}
            </StyledList>

            <Lightbox
              open={index >= 0}
              index={index}
              close={handleClose}
              slides={items}
              plugins={[Captions, Thumbnails]}
            />
          </React.Fragment>
        )}
      </Container>
    </StyledWrapper>
  );
};

export { Gallery };
