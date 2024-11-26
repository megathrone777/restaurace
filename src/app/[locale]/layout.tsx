import React from "react";
import Script from "next/script";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { Footer, Header, ThemeRegistry } from "~/components";
import { GlobalStyle } from "~/theme";
import { font } from "../fonts";
import type { TProps } from "./types";

const GTM_ID = "GTM-PTDGKLZG";

const Layout: React.FC<TProps> = ({ children, params: { locale } }) => {
  const messages = useMessages();

  return (
    <html className={font.variable} lang={locale}>
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <GlobalStyle />

          <NextIntlClientProvider {...{ locale, messages }}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeRegistry>
      </body>

      <Script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${GTM_ID}');
        `,
        }}
        id="gtm-script"
      />
    </html>
  );
};

export default Layout;
