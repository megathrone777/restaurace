import type { HTMLInputTypeAttribute } from "react";

type TFormFieldKey = keyof IntlMessages["reservation"]["form"]["fields"];

export interface TFormField {
  id: TFormFieldKey;
  label: TFormFieldKey;
  name: TFormFieldKey;
  type: HTMLInputTypeAttribute;
}
