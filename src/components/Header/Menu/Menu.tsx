import React from "react";
import { useTranslations } from "next-intl";

import { usePathname } from "~/navigation";
import { items } from "./Menu.data";
import type { TMenuItem } from "./Menu.types";
import { StyledWrapper, StyledList, StyledLink } from "./Menu.styled";

const Menu: React.FC = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <StyledWrapper>
      {items && !!items.length && (
        <StyledList>
          {items.map(
            ({ path, title }: TMenuItem, index: number): React.ReactElement => (
              <li key={`header-menu-${index}`}>
                <StyledLink
                  className={pathname === path ? "active" : ""}
                  href={path}
                >
                  {t(`menu.${title}`)}
                </StyledLink>
              </li>
            )
          )}
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export { Menu };
