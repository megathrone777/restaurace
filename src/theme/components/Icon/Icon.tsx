import React from "react";

import type { TProps } from "./Icon.types";

const Icon: React.FC<TProps> = ({ id }) => (
  <svg>
    <use xlinkHref={`/images/sprite.svg#${id}_icon`} />
  </svg>
);

export { Icon };
