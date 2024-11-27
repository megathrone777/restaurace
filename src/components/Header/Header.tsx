"use client";
import React, { useEffect, useState } from "react";

import { usePathname } from "~/i18n/routing";
import { Container } from "~/theme/components";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  StyledWrapper,
  StyledLayout,
  StyledContent,
  StyledBurger,
  StyledBurgerHelper,
} from "./Header.styled";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [opened, toggleOpened] = useState<boolean>(false);
  const [scrolled, toggleScrolled] = useState<boolean>(false);

  const handleBurgerToggle = (): void => {
    toggleOpened(!opened);
  };

  useEffect((): void => {
    toggleOpened(false);
  }, [pathname]);

  useEffect((): void => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (): void => {
        toggleScrolled(window.scrollY > 0);
      });

      if (window.scrollY > 0) {
        toggleScrolled(true);
      }
    }
  }, []);

  return (
    <StyledWrapper
      className={scrolled ? "scrolled" : ""}
      key={`header-${pathname}`}
    >
      <Container>
        <StyledLayout>
          <Logo />

          <StyledContent className={opened ? "opened" : ""}>
            <Menu />
            <LanguageSwitcher />
          </StyledContent>

          <StyledBurger
            className={opened ? "opened" : ""}
            onClick={handleBurgerToggle}
            type="button"
          >
            <StyledBurgerHelper />
            <StyledBurgerHelper />
            <StyledBurgerHelper />
          </StyledBurger>
        </StyledLayout>
      </Container>
    </StyledWrapper>
  );
};

export { Header };
