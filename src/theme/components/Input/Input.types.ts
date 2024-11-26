import type { InputHTMLAttributes, DetailedHTMLProps } from "react";

import type { TProps as TIconProps } from "~/theme/components/Icon/Icon.types";

export interface TProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string | null;
  iconID?: TIconProps["id"];
}
