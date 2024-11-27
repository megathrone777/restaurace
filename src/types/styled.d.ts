import "styled-components";
import type { CSSObject } from "styled-components";

import type { TColors, TDevices, TFonts } from "~/theme/variables";

declare module "styled-components" {
  interface TPlaceholderFunction<P = Styles<object>> {
    (css: P): P;
  }

  type TFontFunction = (
    size: CSSObject["fontSize"],
    weight: keyof TFonts,
    family?: CSSObject["fontFamily"]
  ) => CSSObject;

  interface THoverFunction<P = CSSObject> {
    (css: P): {
      [key in string]: P;
    };
  }

  export interface DefaultTheme {
    colors: TColors;
    devices: TDevices;
    font: TFontFunction;
    hover: THoverFunction;
    placeholder: TPlaceholderFunction;
  }
}
