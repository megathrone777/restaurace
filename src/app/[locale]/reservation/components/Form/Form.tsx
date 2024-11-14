"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { object, string } from "yup";

import { Button } from "~/theme/components";
import { formFields } from "./Form.data";
import type { TFormField } from "./Form.types";
import {
  StyledWrapper,
  StyledTitle,
  StyledHint,
  StyledItem,
  // StyledLabel,
  StyledInput,
} from "./Form.styled";

const phonePattern =
  /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/;

const validationSchema = object().shape({
  date: string().required(),
  guests: string().required(),
  name: string().required(),
  phone: string().matches(phonePattern, "Phone number is not valid").required(),
  time: string().required(),
});

const Form: React.FC = () => {
  const t = useTranslations();
  const { errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      date: "",
      guests: "",
      name: "",
      phone: "",
      time: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      // const response = await fetch("/api/contacts", {
      //   body: JSON.stringify(values),
      //   method: "POST",
      // });

      // console.log(response);
    },

    validationSchema,
  });

  return (
    <StyledWrapper>
      {formFields && !!formFields.length && (
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <StyledTitle>{t("reservation.form.title")}</StyledTitle>

          <StyledHint>
            Moznost reservace restaurace od 12:00 po dohode s maitelem
          </StyledHint>

          {formFields.map(
            ({ id, name, type }: TFormField): React.ReactElement => (
              <StyledItem key={`${id}-reservation-form-item`}>
                {/* <StyledLabel htmlFor={id}>
                  {t(`reservation.form.fields.${label}`)}:
                </StyledLabel> */}

                <StyledInput
                  {...{ id, name, type }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {Boolean(errors[id]) && <p>{errors[id]}</p>}
              </StyledItem>
            )
          )}

          <Button>Rezervovat</Button>
        </form>
      )}
    </StyledWrapper>
  );
};

export { Form };
