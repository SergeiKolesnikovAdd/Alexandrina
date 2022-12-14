import {
    colors,
    getCurrentPaddingStyle,
    getCurrentMarginStyle,
    applyMargins,
    getCurrentFontSizeStyle,
    fontFamilies,
    hexToRGBA,
    breakpointsWidth,
} from "styles";
import styled from "@emotion/styled";
import {CloseButton} from "../../ui/close-button/close-button.jsx";

const activeErrorField = ({isError}) => {
    isError ? `display: inline-block, color: red` : `display: none`;
};

export const FormModalInner = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: ${hexToRGBA(colors.black, 0.9)};
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("bottom", "lg")};
  ${getCurrentPaddingStyle("top", "xxlg")};
  overflow: hidden;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    ${getCurrentPaddingStyle("top", "xxxlg")};
    ${getCurrentPaddingStyle("horizontal", "xxlg")};
    ${getCurrentPaddingStyle("bottom", "xxlg")};
  }
`;

export const ContentSection = styled.div`
  width: 50%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  ${getCurrentMarginStyle("top", "mdsm")};
  background-color: ${colors.white};
  border-radius: 48px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
    border-radius: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    height: min-content;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 24px;
    height: min-content;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-radius: 3vw;
  }
`;

export const ClsButton = styled(CloseButton)`
  position: absolute;
  right: 0;
  top: 0;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  ${getCurrentPaddingStyle("top", "mdlg")};
  background-color: ${colors.white};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
    border-radius: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 24px;
    height: min-content;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-radius: 3vw;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${colors.red};
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${applyMargins};
`;

export const FormWrapper = styled.form`
  display: flex;
  height: stretch;
  flex-direction: column;
  justify-content: space-between;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    justify-content: flex-start;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    justify-content: flex-start;
  }
`;

export const FormLabel = styled.label`
  font-family: ${fontFamilies.Font};
  color: ${colors.red};
  ${getCurrentFontSizeStyle("caption")}
  ${getCurrentPaddingStyle("bottom", "xxsm")};
`;

export const FormLabelGray = styled(FormLabel)`
  opacity: 0.4;
  color: ${colors.black};
  ${getCurrentPaddingStyle("left", "xxsm")};
`;

export const ErrorField = styled.div`
  ${activeErrorField};
  height: 40px;
`;
export const ErrorMessage = styled.p`
  height: 40px;
`;

export const FormFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    ${getCurrentMarginStyle("top", "lg")}
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    ${getCurrentMarginStyle("top", "lg")}
  }

  ${applyMargins}
`;
