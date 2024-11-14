import createMiddleware from "next-intl/middleware";

import { locales } from "~/i18n";

export default createMiddleware({
  defaultLocale: "cs",
  localePrefix: "as-needed",
  locales,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
