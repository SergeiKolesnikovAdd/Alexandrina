import {
  LeftHand,
  RightHand,
  FirstSlideBGImageWrapper,
  FirstSlideWrapper,
} from "./main-first-slide.style";
import { ButtonMD, H3, H1 } from "components";
import { FormModal } from "components";
import { useState } from "react";

export const MainFirstSlide = ( move, props) => {
  const [isOpenForm, setOpenForm] = useState(false);
  return (
    <>
    <FirstSlideWrapper {...props}>
      <H1 mx="lg">
        многофункциональная
        <br />
        научно-издательская
        <br />
        платформа
      </H1>
      <H3 mt="lg" mx="lg">
        Создайте свой научный журнал, который
        <br />
        будет соответствовать самым высоким
        <br />
        издательским стандартам
      </H3>
      <ButtonMD mt="xxlg" mx="lg"      onClick={() => {
                setOpenForm(true);
              }}>

        Начать работу
      </ButtonMD>
      <FirstSlideBGImageWrapper>
        <LeftHand/>
        <RightHand/>
      </FirstSlideBGImageWrapper>
    </FirstSlideWrapper>
          <FormModal setOpen={setOpenForm} isOpen={isOpenForm}/> 
          </>
  );
};
