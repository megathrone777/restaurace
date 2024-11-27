"use client";
import React from "react";

import { Icon } from "~/theme/components";
import { StyledList, StyledLink } from "./Socials.styled";

const Socials: React.FC = () => (
  <div>
    <StyledList>
      <li>
        <StyledLink
          href="https://www.facebook.com/p/Restaurace-u-Dlaba%C4%8D%C5%AF-100054255771623"
          target="_blank"
        >
          <Icon id="facebook" />
        </StyledLink>
      </li>

      <li>
        <StyledLink
          href="https://www.instagram.com/u_dlabacu_/?igsh=MXJqZDZ6ZW55emU1Nw%3D%3D&utm_source=qr"
          target="_blank"
        >
          <Icon id="instagram" />
        </StyledLink>
      </li>
    </StyledList>
  </div>
);

export { Socials };
