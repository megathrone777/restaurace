import React from "react";

import { usePathname, useRouter, routing } from "~/i18n/routing";
import { Icon } from "~/theme/components";
import { StyledWrapper, StyledButton } from "./LanguageSwitcher.styled";

const LanguageSwitcher: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageClick = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLButtonElement>): void => {
    const selectedLocale = currentTarget.value;

    router.replace(pathname, { locale: selectedLocale as TLocale });
  };

  return (
    <StyledWrapper>
      {routing.locales.map(
        (locale: TLocale): React.ReactElement => (
          <StyledButton
            key={`language-${locale}`}
            onClick={handleLanguageClick}
            type="button"
            value={locale}
          >
            <Icon id={`${locale}`} />
          </StyledButton>
        )
      )}
    </StyledWrapper>
  );
};

export { LanguageSwitcher };
