import type { HTMLInputTypeAttribute } from "react";

type TFormFieldKey = keyof IntlMessages["contacts"]["form"]["fields"];

export interface TFormField {
  id: TFormFieldKey;
  label: TFormFieldKey;
  name: TFormFieldKey;
  type: HTMLInputTypeAttribute | "textarea";
}
