import React from "react";
import type { CountryCode } from "use-telephone";

export interface TOption {
  readonly code: CountryCode;
  readonly name: string;
}

export interface TProps {
  error?: string | null;
  id: string;
  name: string;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: (value: string) => void;
}
