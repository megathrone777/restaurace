import React from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { Footer, Header, ThemeRegistry } from "~/components";
import { GlobalStyle } from "~/theme";
import { font } from "../fonts";
import type { TProps } from "./types";

const Layout: React.FC<TProps> = ({ children, params: { locale } }) => {
  const messages = useMessages();

  return (
    <html className={font.variable} lang={locale}>
      <body>
        <ThemeRegistry>
          <GlobalStyle />

          <NextIntlClientProvider {...{ locale, messages }}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default Layout;
