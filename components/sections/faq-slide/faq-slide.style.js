import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  breakpointsWidth,
  applyPaddings,
  applyMargins,
  colors,
} from "styles";
import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;
