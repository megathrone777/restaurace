import React from "react";

import { StyledWrapper } from "./Copyright.styled";

const Copyright: React.FC = () => {
  const date = new Date();

  return (
    <StyledWrapper>
      <p>U Dlabačů &copy; {date.getFullYear()}. All rights reserved.</p>
    </StyledWrapper>
  );
};

export { Copyright };
