import {
  applyMargins,
  applyPaddings,
  getCurrentColor,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: 368px;
  height: 78px;
  background-color: ${getCurrentColor("red")};
  border: 1px solid ${getCurrentColor("red")};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.35s;

  span {
    color: ${getCurrentColor("white")};
    transition: color 0.35s;
  }

  &:hover {
    background-color: ${getCurrentColor("white")};

    span {
      color: ${getCurrentColor("red")};
    }
  }

  ${applyMargins}
  ${applyPaddings} 
  
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 4, 875vw;
    width: 23vw;
    border-radius: 1vw;
  }
`;