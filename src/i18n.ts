import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales: TLanguage[] = ["en", "cs", "de"] as const;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as TLanguage)) notFound();

  const messages = (
    await (locale === "cs"
      ? import("./translations/cs.json")
      : import(`./translations/${locale}.json`))
  ).default;

  return {
    messages,
  };
});
