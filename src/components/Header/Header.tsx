"use client";
import React from "react";

import { usePathname } from "~/navigation";
import { Container } from "~/theme/components";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { StyledWrapper, StyledLayout, StyledContent } from "./Header.styled";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <StyledWrapper className={pathname !== "/" ? "scrolled" : ""} id="header">
      <Container>
        <StyledLayout>
          <Logo />

          <StyledContent>
            <Menu />
            <LanguageSwitcher />
          </StyledContent>
        </StyledLayout>
      </Container>
    </StyledWrapper>
  );
};

export { Header };
