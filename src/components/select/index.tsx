import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fontConfig, fontSize } from "../../styles/fonts";

interface OptionsType {
  value: string | number;
  name: string;
}

interface SelectProps {
  width: string;
  label: string;
  onChange?: (e: any) => void;
  options: OptionsType[];
  value?: string | number;
  defaultValue?: string;
  borderColor: string;
}

export const Select = ({
  width,
  label,
  onChange,
  value,
  defaultValue,
  options,
  borderColor,
}: SelectProps) => {
  return (
    <Container borderColor={borderColor} width={width}>
      <div className="inputGroup">
        <select defaultValue={defaultValue} onChange={onChange} value={value}>
          {options.map((e, index) => {
            return (
              <option key={index} value={e.value}>
                {e.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="name">{label}</label>
      </div>
    </Container>
  );
};

const Container = styled.div<{ width: string; borderColor: string }>`
  width: ${({ width }) => width};
  height: auto;
  .inputGroup {
    font-family: ${fontConfig.roboto};
    margin: 1em 0 1em 0;
    position: relative;
  }

  .inputGroup select {
    font-size: ${fontSize.small};
    padding: 0.8em;
    border: 1px solid ${colors.lineColor};
    background-color: transparent;
    border-radius: 5px;
    width: 100%;
  }

  .inputGroup label {
    font-size: ${fontSize.small}px;
    position: absolute;
    color: ${({ borderColor }) => borderColor};
    left: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    transform: translateY(-50%) scale(0.9);
    margin: 0em;
    margin-left: 0.5em;
    padding: 0.4em;
    background-color: ${colors.white};
  }
`;
