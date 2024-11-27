import React from "react";

import { StyledWrapper } from "./About.styled";

const About: React.FC = () => (
  <StyledWrapper>
    <p>
      &quot;Tradiční česká restaurace&quot; v centru prahy, kousek od{" "}
      <a href="https://maps.app.goo.gl/qHwDsY8tuj6ZQz8C9" target="_blank">
        Náměstí I.P.Pavlova
      </a>
    </p>
    <p>Restaurace s klasickou českou kuchyní</p>
  </StyledWrapper>
);

export { About };
