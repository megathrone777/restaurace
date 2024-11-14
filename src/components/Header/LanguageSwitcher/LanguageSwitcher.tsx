import React from "react";

import { locales } from "~/i18n";
import { usePathname, useRouter } from "~/navigation";
import { Icon } from "~/theme/components";
import { StyledWrapper, StyledButton } from "./LanguageSwitcher.styled";

const LanguageSwitcher: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageClick = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLButtonElement>): void => {
    const selectedLocale = currentTarget.value;

    router.replace(pathname, { locale: selectedLocale });
  };

  return (
    <StyledWrapper>
      {locales.map(
        (locale: TLanguage): React.ReactElement => (
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
