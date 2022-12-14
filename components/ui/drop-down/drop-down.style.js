import {
  applyMargins,
  applyPaddings,
  colors,
  fontFamilies,
  fontSizes,
  getCurrentColor,
  getCurrentFontSizeStyle,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  hexToRGBA,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";

const errorConditionBackgroundColor = ({ isError }) =>
  isError ? `background-color: ${colors.brightRed}; transform: scaleX(1);` : "";

export const UnderlineInner = styled.div`
  width: 100%;
  height: 100%;
  transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
  transform-origin: left;
  background-color: ${colors.red};
  transition: transform 0.5s;

  ${errorConditionBackgroundColor}
`;

export const Underline = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${hexToRGBA(colors.black, 0.2)};
`;

export const DropDownList = styled.ul`
  position: absolute;
  left: 0;
  top: calc(100% - 2px);
  width: 100%;
  background-color: ${colors.lightOrange};
  border-radius: 32px;
  visibility: hidden;
  max-height: 0;
  transform-origin: top;
  transition: max-height 0.35s, visibility 0.35s;
  overflow: hidden;
  z-index: 5;

  ${({ isOpen }) =>
    isOpen && {
      visibility: "visible",
      maxHeight: "var(--height-drop-down, 40vh)",
    }};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-radius: 2vw;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    top: auto;
    bottom: calc(100% - 2px);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: stroke 0.3s;
  padding: 10px;
  ${({ isOpen, isActive, isError }) => {
    if (isOpen) {
      return { backgroundColor: colors.red };
    } else if (isActive) {
      return { backgroundColor: colors.red };
    } else if (isError) {
      return { backgroundColor: colors.brightRed };
    } else {
      return { backgroundColor: colors.darkOrange };
    }
  }};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 2vw;
    width: 2vw;
    border-radius: 0.5vw;
  }
`;

export const IconPlus = styled.svg`
  display: inline-block;
  width: 12px;
  height: 12px;
  transition: stroke 0.3s;
  ${({ isOpen, isActive, isError }) => {
    if (isOpen) {
      return { display: "none" };
    } else if (isActive) {
      return { stroke: colors.white };
    } else if (isError) {
      return { stroke: colors.white };
    } else {
      return { stroke: colors.red };
    }
  }};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 0.75vw;
    height: 0.75vw;
  }
`;

export const IconMinus = styled.svg`
  display: none;
  width: 12px;
  height: 12px;
  transition: stroke 0.3s;
  ${({ isOpen, isActive }) => {
    if (isOpen) {
      return { display: "block" };
    } else if (isActive) {
      return { display: "none" };
    }
  }};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 0.75vw;
    height: 0.75vw;
  }
`;

export const DropDownItem = styled.li`
  width: 100%;
  cursor: pointer;
  font-family: ${fontFamilies.Font};
  ${getCurrentFontSizeStyle("h3")};
  padding: 12px 16px 12px 16px;
  transition: background-color 0.3s;
  font-weight: 500;
  letter-spacing: 0.01em;
  font-size: ${fontSizes.h3};
  line-height: 150%;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding: 8px 16px 8px 16px;
  }
  &:hover {
    color: ${colors.red};
    background-color: ${colors.orange};
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${colors.darkOrange};
    `};

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    line-height: 110%;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    padding: 0.375vw 1vw 0.375vw 1vw;
  }
`;

export const CurrentLabel = styled.span`
  /* color: ${hexToRGBA(colors.black, 0.2)};
  ${({ isActive }) => isActive && colors.black}; */
`;

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 100%;
  color: ${colors.black};
  font-family: ${fontFamilies.Font};
  text-align: left;
  transition: color 0.3s;
  background-color: ${colors.white};
  font-size: ${fontSizes.h3};

  ${({ isOpen, isActive, isError }) => {
    if (isOpen) {
      return { color: colors.black };
    } else if (isActive) {
      return { color: getCurrentColor("black") };
    } else if (isError) {
      return { color: colors.brightRed };
    } else {
      return { color: hexToRGBA(colors.black, 0.2) };
    }
  }}

  &:hover {
    & + ${Underline} ${UnderlineInner} {
      transform: scaleX(1);
    }
  }

  &::placeholder {
    color: ${colors.black};
  }

  ${getCurrentFontSizeStyle("h3")};
`;

export const Error = styled.div`
  width: 100%;
  color: ${colors.brightRed};
  font-family: ${fontFamilies.Font};

  ${getCurrentFontSizeStyle("caption")};
`;

export const InputWrapper = styled.div`
  position: relative;
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}
  ${applyMargins};
  ${applyPaddings}
`;

export const ErrorWrapper = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
