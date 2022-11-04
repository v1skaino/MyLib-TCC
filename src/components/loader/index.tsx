import { MoonLoader } from "react-spinners";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Label from "../Label";

interface LoaderProps {
  message?: string;
}

export const Loader = ({ message }: LoaderProps) => {
  return (
    <Container>
      <MoonLoader speedMultiplier={0.6} color={colors.primary} />
      <Label size={18} color={colors.primary} marg={"20px"}>
        {message}
      </Label>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: auto;
    margin-top: 100px;
  }
`;
