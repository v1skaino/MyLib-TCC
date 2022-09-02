import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ColorsType } from "../../styles/colors/types";
import { fontConfig, fontSize } from "../../styles/fonts";

interface LabelProps {
  label: string;
  height: number;
  placeholder: string;
  width: number;
  type: string;
  onChange: any;
}

export const Input = ({
  label,
  height,
  placeholder,
  width,
  type,
  onChange,
}: LabelProps) => {
  return (
    <Container width={width}>
      <Label colors={colors}>{label}</Label>
      <InputStyle
        type={type}
        height={height}
        colors={colors}
        placeholder={placeholder}
        onChange={onChange}
      ></InputStyle>
    </Container>
  );
};

const Container = styled.div<{ width: number }>`
  display: flex;
  height: auto;
  width: ${({ width }) => width}%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const InputStyle = styled.input<{ colors: ColorsType; height: number }>`
  border-radius: 5px;
  border: 1px solid;
  width: 100%;
  color: ${({ colors }) => colors.primary};
  border-color: ${({ colors }) => colors.grey};
  height: ${({ height }) => height}px;
  font-weight: ${fontConfig.weight.regular};
  font-family: ${fontConfig.roboto};
  outline: none;
  ::placeholder {
    color: ${({ colors }) => colors.grey02};
  }
`;

const Label = styled.label<{ colors: ColorsType }>`
  color: ${({ colors }) => colors.primary};
  font-weight: ${fontConfig.weight.regular};
  font-family: ${fontConfig.roboto};
  font-size: ${fontSize.medium}px;
  margin-bottom: 4px;
`;
