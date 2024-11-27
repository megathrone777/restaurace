import React from "react";
import { useTranslations } from "next-intl";

import { Socials } from "~/components";
import { StyledWrapper, StyledLayout } from "./About.styled";

const About: React.FC = () => {
  const t = useTranslations();

  return (
    <StyledWrapper>
      <StyledLayout>
        <p>
          {t("footer.title")}{" "}
          <a href="https://maps.app.goo.gl/qHwDsY8tuj6ZQz8C9" target="_blank">
            Náměstí I.P.Pavlova
          </a>
        </p>
        <p>{t("footer.text")}</p>
      </StyledLayout>

      <Socials />
    </StyledWrapper>
  );
};

export { About };
