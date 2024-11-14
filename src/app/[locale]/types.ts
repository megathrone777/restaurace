import React from "react";

export interface TProps {
  children: React.ReactNode;
  params: {
    locale: TLanguage;
  };
}
