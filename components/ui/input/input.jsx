import { PropTypes } from "prop-types";
import { forwardRef } from "react";
import {
  Error,
  InputStyled,
  InputWrapper,
  Title,
  Underline,
  UnderlineInner,
} from "./input.style";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    {
      title,
      error,
      value = "",
      onChange,
      propsInput,
      isFullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <InputWrapper isFullWidth={isFullWidth} {...props}>
        <InputStyled
          value={value}
          onChange={onChange}
          isError={error}
          type="text"
          ref={ref}
          {...propsInput}
        />
        <Underline {...propsInput}>
          <UnderlineInner {...propsInput} isActive={value} isError={error} />
        </Underline>
        {error && <Error {...propsInput}>{error}</Error>}
      </InputWrapper>
    );
  }
);

Input.propTypes = {
  title: PropTypes.string,
  isFullWidth: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
