import { Caption,  } from "components";
import Link from "next/link";
import { useState } from "react";
import {
  CheckboxWrapper,
  CheckboxBorder,
  CheckboxInner,
  TextWrapper,
  StyledCaption,
} from "./checkbox.style";

export const Checkbox = ({ error }) => {
  const [isActive, setActiveState] = useState(false);
  return (
    <CheckboxWrapper onClick={() => setActiveState((prev) => !prev)}>
      <CheckboxBorder isActive={isActive} isError={error}>
        <CheckboxInner isActive={isActive} isError={error} />
      </CheckboxBorder>
      <TextWrapper>
        <Caption isError={error}>Я даю согласие на обработку моих</Caption>
        <Link href="">
          <StyledCaption isError={error}>персональных данных</StyledCaption>
        </Link>
      </TextWrapper>
    </CheckboxWrapper>
  );
};