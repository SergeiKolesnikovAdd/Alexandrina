import { useFormContext } from "react-hook-form";
import {
  FormWrapper,
  FormFields,
  ButtonWrapper,
} from "./news-slide.style";
import { withFormProvider } from "utils";
import { postSubscribe } from "utils/api";
import { SendButton } from "./news-slide.style";
import { colors } from "styles";
import { InputFieldNews } from "components";
import { ButtonMD } from "components";
import { Right } from "components";
import { ButtonNews } from "components";
import { useState } from "react";

export const NewsForm = withFormProvider(
  ({ setIsGratitude, formName,}) => {

    const { handleSubmit, reset, watch } = useFormContext();
    const onSubmit = (data) => {
      setIsGratitude(true);
      postSubscribe({
        email: data.email,
        formName: formName,
      })
        .then(() => {
          reset({});
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormFields>
          <InputFieldNews
            style={{ color: colors.white }}
            name="email"
            propsInput={{
              isWhite: true,
              placeholder: "Введите Ваш E-mail",
            }}
          />
        </FormFields>
        <ButtonWrapper>
          <ButtonNews />
        </ButtonWrapper>
      </FormWrapper>
    );
  },
  {
    mode: "onBlur",
    reValidateMode: "onBlur",
  }
);