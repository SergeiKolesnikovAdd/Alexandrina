import {
  sizes,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  colors,
  fontFamilies,
  breakpointsWidth,
} from "styles";
import styled from "@emotion/styled";
import { getCurrentFontSizeStyle } from "styles";

export const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 100;
  position: fixed;
  /* background-color: ${({ isOpen }) =>
    isOpen ? "none" : colors.lightOrange}; */
  background-color: ${colors.lightOrange};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  ${getCurrentPaddingStyle("horizontal", "lg")};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: 68px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 6vw;
  } ;
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  &:hover {
    svg {
      &:first-child {
        transform: scale(1.1);
      }
    }
  }
`;

export const HeaderMenuItem = styled.a`
  font-family: ${fontFamilies.Font};
  ${getCurrentFontSizeStyle("text")};
  display: flex;
  ${getCurrentMarginStyle("right", "lg")};
  align-items: center;
  cursor: pointer;
  transition: color 0.3s;
  /* color: ${({ isOpen }) => (isOpen ? colors.white : colors.black)}; */
  color: ${colors.black};

  &:hover {
    color: ${colors.red};
  }
`;
