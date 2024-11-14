"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Container } from "~/theme/components";
import { StyledWrapper, StyledTitle, StyledLayout } from "./About.styled";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    delay: 100,
    rootMargin: "-1px",
    threshold: 0,
    trackVisibility: true,
  });

  useEffect((): void => {
    const headerElement = document.getElementById("header");

    if (inView) {
      headerElement?.classList.add("scrolled");
    } else {
      headerElement?.classList.remove("scrolled");
    }
  }, [inView]);

  return (
    <StyledWrapper ref={ref}>
      <Container>
        <StyledTitle>O restauraci</StyledTitle>

        <StyledLayout>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quod
            voluptates a optio sit hic laboriosam id quia commodi magnam dolore
            voluptas, rerum neque deleniti enim fuga delectus cupiditate quae.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quod
            voluptates a optio sit hic laboriosam id quia commodi magnam dolore
            voluptas, rerum neque deleniti enim fuga delectus cupiditate quae.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quod
            voluptates a optio sit hic laboriosam id quia commodi magnam dolore
            voluptas, rerum neque deleniti enim fuga delectus cupiditate quae.
          </p>
        </StyledLayout>
      </Container>
    </StyledWrapper>
  );
};

export { About };
