import React from "react";
import { useTranslations } from "next-intl";

import { usePathname } from "~/i18n/routing";
import type { TMenuItem } from "./Menu.types";
import { items } from "./Menu.data";
import {
  StyledWrapper,
  StyledList,
  StyledItem,
  StyledLink,
} from "./Menu.styled";

const Menu: React.FC = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <StyledWrapper>
      {items && !!items.length && (
        <StyledList>
          {items.map(
            ({ path, title }: TMenuItem, index: number): React.ReactElement => (
              <StyledItem key={`header-menu-${index}`}>
                <StyledLink
                  className={pathname === path ? "active" : ""}
                  href={path}
                >
                  {t(`menu.${title}`)}
                </StyledLink>
              </StyledItem>
            )
          )}
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export { Menu };
