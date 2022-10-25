import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../../styles/colors";
import { ColorsType } from "../../../styles/colors/types";
import { fontConfig, fontSize } from "../../../styles/fonts";

export const SideBar = () => {
  const navigation = useNavigate();

  return (
    <Container colors={colors}>
      <Logo
        onClick={() => navigation("/")}
        src={require("../../../assets/images/LogoMyLibW.png")}
        alt="Logo"
      />
      <Links>
        <Route colors={colors}>Venda</Route>
        <Route colors={colors}>Estoque</Route>
        <Route colors={colors}>Histórico</Route>
        <Route colors={colors}>Produtos</Route>
      </Links>
    </Container>
  );
};

const Container = styled.div<{ colors: ColorsType }>`
  width: 250px;
  height: 100vh;
  background-color: ${({ colors }) => colors.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Links = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 90%;
  padding: 20px;
  cursor: pointer;
`;

const Route = styled.div<{ colors: ColorsType }>`
  border-top: 1px solid ${({ colors }) => colors.white};
  color: ${({ colors }) => colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-weight: ${fontConfig.weight.book};
  font-size: ${fontSize.bigger001}px;
  font-family: ${fontConfig.roboto};
  width: 100%;
  cursor: pointer;
`;
