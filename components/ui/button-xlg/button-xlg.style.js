import {
  applyMargins,
  applyPaddings,
  colors,
  breakpointsWidth,
  getCurrentPaddingStyle,
} from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  height: max-content;
  width: max-content;
  background-color: ${colors.red};
  border: 1px solid ${colors.red};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("vertical", "md2")};

  span {
    color: ${colors.white};
    transition: color 0.3s;
  }

  &:hover {
    background-color: ${colors.lightOrange};

    span {
      color: ${colors.red};
    }
  }

  ${applyMargins}
  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    border-radius: 12px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 10px;
    margin-top: 24px;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-radius: 1vw;
  }
`;
