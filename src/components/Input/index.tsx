import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fontConfig, fontSize } from "../../styles/fonts";

interface InputProps {
  width: string;
  label: string;
  onChange?: (e: any) => void;
  readOnly?: boolean;
  value?: string;
  defaultValue?: string;
  type?: string;
  max?: number;
  error?: boolean;
  errorMessage?: string;
  labelColor: string;
  onClick?: () => void;
}

export const Input = ({
  width,
  label,
  onChange,
  readOnly,
  value,
  defaultValue,
  type,
  max,
  error,
  errorMessage,
  labelColor,
  onClick,
}: InputProps) => {
  return (
    <Container onClick={onClick} color={labelColor} width={width}>
      <div className="inputGroup">
        <input
          onChange={onChange}
          value={value}
          readOnly={readOnly}
          defaultValue={defaultValue}
          type={type}
          autoComplete="off"
          maxLength={max}
        />
        <label htmlFor="name">{label}</label>
        {error ? <ErrorLabel>{errorMessage}</ErrorLabel> : null}
      </div>
    </Container>
  );
};

const Container = styled.div<{ width: string; color: string }>`
  width: ${({ width }) => width};
  height: auto;
  .inputGroup {
    font-family: ${fontConfig.roboto};
    margin: 1em 0 1em 0;
    position: relative;
  }

  .inputGroup input {
    font-size: ${fontSize.small};
    padding: 0.8em;
    outline: none;
    border: 1px solid ${colors.lineColor};
    background-color: transparent;
    border-radius: 5px;
    width: 100%;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  .inputGroup label {
    font-size: ${fontSize.small}px;
    position: absolute;
    color: ${({ color }) => color};
    left: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    transform: translateY(-50%) scale(0.9);
    margin: 0em;
    margin-left: 0.5em;
    padding: 0.4em;
    background-color: ${colors.white};
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const ErrorLabel = styled.p`
  font-size: ${fontSize.small}px;
  color: ${colors.red};
  margin: 4px 0px 0px 5px;
`;
