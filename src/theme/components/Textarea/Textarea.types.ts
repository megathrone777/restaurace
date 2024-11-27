import type { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export interface TProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: string | null;
}
