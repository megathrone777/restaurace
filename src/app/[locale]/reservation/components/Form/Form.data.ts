import type { TFormField } from "./Form.types";

export const formFields: TFormField[] = [
  {
    id: "name",
    label: "name",
    name: "name",
    type: "text",
  },
  {
    id: "phone",
    label: "phone",
    name: "phone",
    type: "tel",
  },
  {
    id: "date",
    label: "date",
    name: "date",
    type: "date",
  },
  {
    id: "time",
    label: "time",
    name: "time",
    type: "time",
  },
  {
    id: "guests",
    label: "guests",
    name: "guests",
    type: "number",
  },
];
