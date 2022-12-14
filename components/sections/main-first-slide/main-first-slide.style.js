import { applyMargins, applyPaddings, breakpointsWidth } from "styles";

import imgLeft from "public/left-hand.png";
import imgRight from "public/right-hand.png";
import styled from "@emotion/styled";

export const FirstSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  h1 {
    span {
      @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        font-size: 4em;
      }

      @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
        font-size: 3em;
      }

      @media screen and (max-width: ${breakpointsWidth.phone}) {
        font-size: 2em;
      }
    }
  }

  ${applyMargins}
  ${applyPaddings}
`;

export const FirstSlideBGImageWrapper = styled.div`
  width: 100%;
  height: 30vw;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 100%;
    height: 30vw;
  }
`;

export const LeftHand = styled.img`
  position: absolute;
  left: -4%;
  width: 50%;
  height: 30vw;
  content: url(${imgLeft.src});
  transition: transform 0.25s linear;
  ${({ scrollY }) => scrollY && `transform: translateX(${scrollY}px);`};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 50vw;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 50vw;
    left: -6%;
  }
`;

export const RightHand = styled.img`
  position: absolute;
  right: -4%;
  width: 50%;
  height: 30vw;
  content: url(${imgRight.src});
  transition: transform 0.2s linear;
  ${({ scrollY }) => scrollY && `transform: translateX(-${scrollY}px);`};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 50vw;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    width: 50vw;
    right: -6%;
  }
`;
