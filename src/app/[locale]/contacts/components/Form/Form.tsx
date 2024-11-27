"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { object, string } from "yup";

import {
  Button,
  Container,
  Input,
  Spinner,
  Textarea,
} from "~/theme/components";
import type { TProps as TIconProps } from "~/theme/components/Icon/Icon.types";
import { formFields } from "./Form.data";
import type { TFormField } from "./Form.types";
import {
  StyledWrapper,
  StyledForm,
  StyledLayout,
  StyledTitle,
} from "./Form.styled";

const Form: React.FC = () => {
  const t = useTranslations();
  const [success, toggleSuccess] = useState<boolean>(false);
  const validationSchema = object().shape({
    email: string()
      .email(t("contacts.form.errors.email"))
      .required(t("contacts.form.errors.email")),
    name: string().required(t("contacts.form.errors.name")),
    message: string().required(t("contacts.form.errors.message")),
  });
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    onSubmit: async (values) => {
      const response = await fetch("/api/contacts", {
        body: JSON.stringify(values),
        method: "POST",
      });
      const data = (await response.json()) as { success: boolean };

      if (response.ok && data && data.success) {
        toggleSuccess(true);

        return;
      }

      toggleSuccess(false);
    },

    validationSchema,
    validateOnBlur: true,
  });

  return (
    <StyledWrapper>
      <Container>
        {success ? (
          <React.Fragment>
            <StyledTitle>{t("contacts.form.success")}</StyledTitle>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {formFields && !!formFields.length && (
              <StyledForm
                action="#"
                method="POST"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <StyledTitle>{t("contacts.form.title")}</StyledTitle>

                {formFields && !!formFields.length && (
                  <StyledLayout>
                    {formFields.map(
                      ({
                        id,
                        label,
                        name,
                        type,
                      }: TFormField): React.ReactElement => {
                        if (type === "textarea") {
                          return (
                            <Textarea
                              {...{ id, name, type }}
                              error={
                                errors[id] && touched[id] ? errors[id] : null
                              }
                              key={`${id}-contacts-form-item`}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder={t(`contacts.form.fields.${label}`)}
                            />
                          );
                        }

                        return (
                          <Input
                            {...{ id, name, type }}
                            error={
                              errors[id] && touched[id] ? errors[id] : null
                            }
                            iconID={name as TIconProps["id"]}
                            key={`${id}-contacts-form-item`}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder={t(`contacts.form.fields.${label}`)}
                          />
                        );
                      }
                    )}
                  </StyledLayout>
                )}

                <Button type="submit">{t("contacts.form.submit")}</Button>
              </StyledForm>
            )}

            {isSubmitting && <Spinner />}
          </React.Fragment>
        )}
      </Container>
    </StyledWrapper>
  );
};

export { Form };
