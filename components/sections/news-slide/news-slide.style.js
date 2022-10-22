import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
  colors,
  getCurrentMarginStyle,
  getCurrentFontSizeStyle,
  getCurrentPaddingStyle,
  fontSizes,
} from "styles";

import { Text, H3, ButtonSliderRight, } from "components";
import styled from "@emotion/styled";
import { Subscription } from "../../common";
import sub from "../../../public/subscription.png";
import { InputField } from "../../ui/fields";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${getCurrentPaddingStyle("horizontal", "lg")};

  ${applyMargins}
  ${applyPaddings}
`;

export const NewsWrapper = styled.div`
  display: grid;
  width: max-content;
  grid-template-columns: repeat(3, 31vw);
  grid-template-rows: repeat(2, 580px);
  gap: 16px;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 440px);
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 366px);
  }

  ${applyMargins}
  ${applyPaddings}
`;

export const SubscriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 48px;
  background-image: url(${sub.src});
  background-repeat: no-repeat;
  background-size: cover;
  ${getCurrentPaddingStyle("top","xxxlg")};
  text-align: center;

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    border-radius: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 24px;
  }

  ${applyPaddings}
  ${applyMargins}
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${getCurrentMarginStyle("top", "mdlg")};
  ${getCurrentMarginStyle("bottom", "lg")};

  ${applyPaddings}
  ${applyMargins}
`;

export const StyledInput = styled(InputField)`
  border: 1px solid #22222208;
  ${applyPaddings};
  ${applyMargins};
`;

export const SendButton = styled(ButtonSliderRight)`
  background-color: ${colors.red};
  border: 1px solid ${colors.red};

  svg {
    path {
      fill: ${colors.white};
    }
  }

  &:hover {
    background-color: ${colors.lightOrange};

    svg {
      path {
        fill: ${colors.red};
      }
    }
  }
`;

export const Logo = styled(Subscription)`
`;

export const Link = styled.a`
  span {
    color: ${colors.red};
  }

  :hover {
    transition: opacity 0.3s;
    opacity: 0.4;
  }

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
  text-align: center;
  color: ${colors.white};
  ${getCurrentFontSizeStyle("h3")};
`;

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
`;