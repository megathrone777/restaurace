"use client";
import React from "react";

import { Container } from "~/theme/components";
import { StyledWrapper, StyledTitle, StyledLayout } from "./About.styled";

const About: React.FC = () => (
  <StyledWrapper>
    <Container>
      <StyledTitle>O restauraci</StyledTitle>

      <StyledLayout>
        <p>
          &quot;TRADIČNÍ ČESKÁ RESTAURACE&quot; V CENTRU PRAHY, KOUSEK OD{" "}
          <a href="https://maps.app.goo.gl/qHwDsY8tuj6ZQz8C9" target="_blank">
            NÁMĚSTÍ I.P.PAVLOVA
          </a>
        </p>
        <p>
          RESTAURACE S KLASICKOU ČESKOU KUCHYNÍ TAKY HAMBURGERY, TĚSTOVINY,
          SALÁTY A MINUTKOVÉ POKRMY
        </p>
        <p>
          MOŽNOST POŘÁDÁNÍ SVATEB FIREMNÍCH AKCÍ, NAROZENINOVÝCH OSLAV NEBO
          RAUTŮ NA ČEPU: PILSNER URQUELL VELKOPPOPOVICKÝ KOZEL 11° ČERNÝ KOZEL,
          RADEGAST MÍCHANÉ DRINKY, VÍNA A RŮZNÉ DRUHY NEALKO NAPOJI
        </p>
        <p>
          DALŠÍ SLUŽBY: WIFI, PLATBA KARTOU ROZVOZ JÍDEL PŘES{" "}
          <a
            href="https://food.bolt.eu/cs-CZ/271-prague/p/2258-u-dlaba%C4%8D%C5%AF"
            target="_blank"
          >
            BOLT
          </a>
          ,{" "}
          <a
            href="https://wolt.com/cs/cze/prague/restaurant/restaurace-u-dlabacu"
            target="_blank"
          >
            WOLT
          </a>
          ,{" "}
          <a
            href="https://www.foodora.cz/restaurant/z6ji/restaurace-u-dlabacu"
            target="_blank"
          >
            FOODORA
          </a>{" "}
          TĚŠÍME SE NA VAŠI NÁVŠTĚVU!
        </p>
      </StyledLayout>
    </Container>
  </StyledWrapper>
);

export { About };
