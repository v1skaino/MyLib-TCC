import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ColorsType } from "../../styles/colors/types";
import { fontConfig, fontSize } from "../../styles/fonts";

interface SubmitButtonProps {
  label: string;
  height: number;
  width: number;
  filled: boolean;
  onPress: () => void;
}

export const SubmitButton = ({
  label,
  height,
  width,
  filled,
  onPress,
}: SubmitButtonProps) => {
  return (
    <Container width={width}>
      {filled ? (
        <Button onClick={onPress} height={height} colors={colors}>
          {label}
        </Button>
      ) : (
        <OutlinedButton onClick={onPress} height={height} colors={colors}>
          {label}
        </OutlinedButton>
      )}
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

const Button = styled.button<{ colors: ColorsType; height: number }>`
  outline: none;
  height: ${({ height }) => height}px;
  width: 100%;
  background-color: ${({ colors }) => colors.primary};
  color: ${({ colors }) => colors.white};
  font-family: ${fontConfig.roboto};
  font-weight: ${fontConfig.weight.bold};
  font-size: ${fontSize.medium}px;
  border: 2px solid;
  border-color: ${({ colors }) => colors.white};
  border-radius: 5px;
  transition: 0.5s;
  :hover {
    border-color: ${({ colors }) => colors.primary};
    background-color: ${({ colors }) => colors.white};
    color: ${({ colors }) => colors.primary};
  }
`;

const OutlinedButton = styled.button<{ colors: ColorsType; height: number }>`
  outline: none;
  height: ${({ height }) => height}px;
  width: 100%;
  background-color: ${({ colors }) => colors.white};
  color: ${({ colors }) => colors.primary};
  font-family: ${fontConfig.roboto};
  font-weight: ${fontConfig.weight.bold};
  font-size: ${fontSize.medium}px;
  border: 2px solid;
  border-color: ${({ colors }) => colors.primary};
  border-radius: 5px;
  transition: 0.5s;
  :hover {
    border-color: ${({ colors }) => colors.white};
    background-color: ${({ colors }) => colors.primary};
    color: ${({ colors }) => colors.white};
  }
`;
