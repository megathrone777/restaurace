"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { number, object, string } from "yup";

import { Button, Input } from "~/theme/components";
import type { TProps as TIconProps } from "~/theme/components/Icon/Icon.types";
import { Phone } from "./Phone";
import { formFields } from "./Form.data";
import type { TFormField } from "./Form.types";
import {
  StyledWrapper,
  StyledLayout,
  StyledTitle,
  StyledHint,
} from "./Form.styled";

const phonePattern =
  /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/;

const Form: React.FC = () => {
  const t = useTranslations();
  const validationSchema = object().shape({
    date: string().required(t("reservation.form.errors.date")),
    guests: number()
      .min(1, t("reservation.form.errors.guests"))
      .required(t("reservation.form.errors.guests")),
    name: string().required(t("reservation.form.errors.name")),
    phone: string()
      .matches(phonePattern, t("reservation.form.errors.phone"))
      .required(t("reservation.form.errors.phone")),
    time: string().required(t("reservation.form.errors.time")),
  });
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      date: "",
      guests: "",
      name: "",
      phone: "",
      time: "",
    },

    onSubmit: async (values) => {
      await fetch("/api/contacts", {
        body: JSON.stringify(values),
        method: "POST",
      });
    },

    validationSchema,
    validateOnBlur: true,
  });

  const handlePhoneChange = (value: string): void => {
    console.log(value);
    setFieldValue("phone", value);
  };

  return (
    <StyledWrapper>
      {formFields && !!formFields.length && (
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <StyledTitle>{t("reservation.form.title")}</StyledTitle>
          <StyledHint>{t("reservation.form.text")}</StyledHint>

          {formFields && !!formFields.length && (
            <StyledLayout>
              {formFields.map(
                ({ id, label, name, type }: TFormField): React.ReactElement => {
                  if (type === "tel") {
                    return (
                      <Phone
                        {...{ id, name }}
                        error={errors[id] && touched[id] ? errors[id] : null}
                        key={`${id}-reservation-form-item`}
                        onBlur={handleBlur}
                        onChange={handlePhoneChange}
                      />
                    );
                  }

                  return (
                    <Input
                      {...{ id, name, type }}
                      error={errors[id] && touched[id] ? errors[id] : null}
                      iconID={name as TIconProps["id"]}
                      key={`${id}-reservation-form-item`}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder={t(`reservation.form.fields.${label}`)}
                    />
                  );
                }
              )}
            </StyledLayout>
          )}

          <Button type="submit">{t("reservation.form.submit")}</Button>
        </form>
      )}
    </StyledWrapper>
  );
};

export { Form };
