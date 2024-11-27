"use client";
import React from "react";

import { StyledWrapper, StyledIframe } from "./Map.styled";

const Map: React.FC = () => (
  <StyledWrapper>
    <StyledIframe
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.5622247247447!2d14.424677177543664!3d50.07575971427028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948c8ee2bac5%3A0x976aad86dcd9c65c!2zViBUxa9uw61jaCAxNjM2LzEsIDEyMCAwMCBOb3bDqSBNxJtzdG8!5e0!3m2!1sen!2scz!4v1732724724892!5m2!1sen!2scz"
    ></StyledIframe>
  </StyledWrapper>
);

export { Map };
