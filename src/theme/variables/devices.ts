import type { TDevices } from "./types";

const sizes: TDevices = {
  desktop: "1280px",
  tablet: "1023px",
  mobile: "767px",
  mobileSm: "500px",
};

const devices: TDevices = {
  desktop: `@media screen and (max-width: ${sizes.desktop})`,
  tablet: `@media screen and (max-width: ${sizes.tablet})`,
  mobile: `@media screen and (max-width: ${sizes.mobile})`,
  mobileSm: `@media screen and (max-width: ${sizes.mobileSm})`,
};

export { devices };
