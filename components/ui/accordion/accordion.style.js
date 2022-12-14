import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyPaddings,
  applyMargins,
  colors,
  getCurrentFontSizeStyle,
  breakpointsWidth,
} from "styles";

import { Text, H3 } from "components";
import { Plus, Minus } from "../../common";

import styled from "@emotion/styled";

export const AccordionWrapper = styled.div`
  width: 100%;

  ${applyMargins}
`;

export const AccordionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 120px;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  border: 1px solid
    ${({ isShowing }) => (isShowing ? colors.black : colors.white)};
  background-color: ${({ isShowing }) =>
    isShowing ? colors.black : colors.white};
  transition: background-color 0.3s;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("vertical", "mdlg")};
  transition: all 0.3s;

  h3 {
    color: ${({ isShowing }) => (isShowing ? colors.white : colors.black)};
  }

  /* TODO: разобраться с hover */
  :hover {
    background-color: ${colors.lightOrange};
    border: 1px solid ${colors.red};
    h3 {
      color: ${colors.red};
    }
    div {
      background-color: ${colors.red};
      svg {
        path {
          stroke: white;
        }
      }
    }
  }

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    max-height: 96px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 18px;
    max-height: inherit;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    max-height: 7.5vw;
    border-radius: 2vw;
  }
`;

export const InnerContent = styled.div`
  display: flex;
  width: 100%;
  border-radius: 32px;
  ${getCurrentMarginStyle("top", "xxsm")};
  ${getCurrentPaddingStyle("verical", "mdlg")};
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  display: ${({ isShowing }) => (isShowing ? "flex" : "none")};
  background-color: ${({ isShowing }) =>
    isShowing ? colors.black : colors.lightOrange};
  transition: background-color 0.3s;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 18px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-radius: 2vw;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  text-align: left;
`;

export const Title = styled(H3)`
  text-align: left;
  width: 35vw;

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 100%;
  }

  ${applyPaddings}
  ${applyMargins}
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 56px;
  min-height: 56px;
  border-radius: 16px;
  background-color: ${({ isShowing }) =>
    isShowing ? colors.red : colors.grey};
  transition: background-color 0.3s;

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 16px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 12px;
    margin-left: 8px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    min-width: 3.5vw;
    min-height: 3.5vw;
    border-radius: 1vw;
  }
`;

export const IconMinus = styled(Minus)`
  display: ${({ isShowing }) => (isShowing ? "block" : "none")};
  transition: display 0.3s;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 1vw;
    height: 1vw;
  }
`;

export const IconPlus = styled(Plus)`
  display: ${({ isShowing }) => (isShowing ? "none" : "block")};
  transition: display 0.3s;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 1vw;
    height: 1vw;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  text-align: left;
  margin: 0;
  color: ${({ isShowing }) => (isShowing ? colors.white : colors.black)};
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  transition: color 0.2s, opacity 0.2s;
  transition-delay: 0.1s;
`;

export const StyledLinkText = styled(Text)`
  color: ${colors.red};

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${colors.red};
    display: block;
    ${getCurrentMarginStyle("top", "xxxsm")};
  }
`;

export const StyledText = styled(Text)`
  width: 23vw;
  color: ${colors.white};
`;

export const H3Styled = styled(Text)`
  ${getCurrentFontSizeStyle("h3")};
  width: 50vw;
  color: ${colors.white};

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 100%;
  }
`;
