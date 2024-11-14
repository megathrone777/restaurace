import type { Metadata } from "next";

import en from "~/translations/en.json";

export type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}

  export type TLanguage = "en" | "cs" | "de";

  export type TMetadataFunction = ({
    params: { locale: TLanguage },
  }) => Promise<Metadata>;
}

export {};
