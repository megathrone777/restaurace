import React from "react";
import { useTranslations } from "next-intl";

import { Icon } from "~/theme/components";
import { StyledText, StyledIcon } from "./Time.styled";

const Time: React.FC = () => {
  const t = useTranslations();

  return (
    <div>
      <StyledIcon>
        <Icon id="time" />
      </StyledIcon>

      <StyledText>{t("schedule")}</StyledText>
    </div>
  );
};

export { Time };
