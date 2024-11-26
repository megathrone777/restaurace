import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

const locales: TLocale[] = ["en", "cs", "de"] as const;

export const routing = defineRouting({
  defaultLocale: "cs",
  localePrefix: "as-needed",
  locales,
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
