import type { TFormField } from "./Form.types";

export const formFields: TFormField[] = [
  {
    id: "name",
    label: "name",
    name: "name",
    type: "text",
  },
  {
    id: "email",
    label: "email",
    name: "email",
    type: "email",
  },
  {
    id: "message",
    label: "message",
    name: "message",
    type: "textarea",
  },
];
