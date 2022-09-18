import { H2, ButtonXSM, Text, Accordion, } from "components";
import {
  ContentWrapper,
} from "./faq-slide.style";

import {
  colors,
} from "styles";

export const FaqSlide = ({ ...props }) => {
  return (
    <ContentWrapper px="mdsm" {...props}>
      <Text>Это может быть полезным</Text>
      <H2 mt="mdsm">
        Часто задаваемые
        <br />
        вопросы
      </H2>
      <ButtonXSM mt="lg" mb="xxlg">
        Все вопросы
      </ButtonXSM>
      <Accordion
        title="Каковы преимущества Alexandrina"
        title2="перед зарубежными издательствами?"
        desc1="Значимость этих проблем настолько
очевидна, что рамки и место обучения кадров позволяет выполнять важные задания по разработке новых предложений. Товарищи! сложившаяся структура организации влечет
за собой процесс внедрения
и модернизации модели развития."
        desc2="Сложившаяся структура организации влечет за собой процесс внедрения
и модернизации модели развития. Таким образом рамки и место обучения кадров требуют от нас анализа дальнейших направлений развития."
        descLink="Ссылки по данной теме:"
        Link1="Пакеты услуг и стоимость"
        Link2="Преимущества Alexandrina"
        Link3="Вход и регистрация"
      ></Accordion>
    </ContentWrapper>
  );
};