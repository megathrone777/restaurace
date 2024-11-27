import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  defaultLocale: "cs",
  localeDetection: false,
  localePrefix: "as-needed",
  locales: ["en", "cs", "de"],
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
