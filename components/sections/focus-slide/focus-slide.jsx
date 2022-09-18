import { Caption, H2, Text } from "components";
import {
  ContentWrapper,
  TextWrapper,
  SliderWrapper,
  HigherPart,
} from "./focus-slide.style";

import { colors } from "styles";
import { Slider } from "components";

export const FocusSlide = ({ ...props }) => {
  return (
    <ContentWrapper {...props}>
      <TextWrapper>
        <HigherPart>
          <Text style={{ opacity: 0.4, color: colors.white }}>
            Фокусность проекта
          </Text>
          <H2 mt="mdsm" style={{ color: colors.white }}>
            Для кого наша
            <br />
            платформа?
          </H2>
        </HigherPart>
        <Text style={{ color: colors.white }}>
          Мы помогаем создавать, развивать и продвигать
          <br />
          в различные базы данных научные журналы и книги
          <br />
          издателям абсолютно любого масштаба. Самые удобные
          <br />
          современные инструменты для ведения публикационной
          <br />
          деятельности позволяют находить оптимальные решения,
          <br />
          исходя из потребностей каждого издателя.
        </Text>
      </TextWrapper>
      <SliderWrapper>
        <Slider />  
      </SliderWrapper>
    </ContentWrapper>
  );
};
