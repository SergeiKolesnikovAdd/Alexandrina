import { useState } from "react";
import { ButtonMD, TextAreaField, InputField, Checkbox} from "components";
import { useFormContext } from "react-hook-form";
import { FormLabel, FormWrapper } from "./questions-modal.style";
import { withFormProvider, } from "utils";
import { postQuestion } from "utils/api"



export const Form = withFormProvider(({ cost, discription, title }) => {
  const [isChecked, setIsChecked] = useState(false)
  const { handleSubmit } = useFormContext();
  const onSubmit = (data) => {
    postQuestion({
      ...data,
      email: data.email,
      name: data.name,
      message : data.message,
    })
      .then(() => {
        // setOpen(true)
        // console.log(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Как вас зовут?</FormLabel>
      <InputField
        name="name"
        mb="md"
        propsInput={{ placeholder: "Ваше имя" }}
        title="Name *"
      />
      <FormLabel>Электронная почта</FormLabel>
      <InputField name="email" mb="md" propsInput={{ placeholder: "E-mail" }} />
      <FormLabel>Дополнительная информация</FormLabel>
      <TextAreaField name="message" rules={{}} />
      <Checkbox
        isActive={isChecked}
        setActive={handleCheck}
        name="checkbox"
        mb="lg"
      />
      <ButtonMD disabled={!isChecked}>Оставить заявку</ButtonMD>
    </FormWrapper>
  );
});
