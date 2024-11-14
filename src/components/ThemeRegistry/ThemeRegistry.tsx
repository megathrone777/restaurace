"use client";
import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";

import { theme } from "~/theme";
import type { TProps } from "./ThemeRegistry.types";

const ThemeRegistry: React.FC<TProps> = ({ children }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML((): React.ReactElement => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    styledComponentsStyleSheet.instance.clearTag();

    return <React.Fragment key="collect-styles">{styles}</React.Fragment>;
  });

  if (typeof window !== "undefined") {
    return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
  }

  return (
    <StyleSheetManager
      enableVendorPrefixes
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={(): boolean => true}
    >
      <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
};

export { ThemeRegistry };
