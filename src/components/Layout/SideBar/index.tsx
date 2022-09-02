import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../services/auth";
import { colors } from "../../../styles/colors";
import { ColorsType } from "../../../styles/colors/types";
import { fontConfig, fontSize } from "../../../styles/fonts";

export const SideBar = () => {
  const { logOut } = useAuth();
  let name = localStorage.getItem("@InfoUser:name");
  let permission = localStorage.getItem("@InfoUser:type");

  const navigation = useNavigate();

  return (
    <Container colors={colors}>
      <Logo
        onClick={() => navigation("/")}
        src={require("../../../assets/images/LogoMyLibW.png")}
        alt="Logo"
      />
      <Welcome colors={colors}>
        Bem Vindo,<br></br>
        {name}
      </Welcome>
      <Links>
        <Route colors={colors}>Venda</Route>
        <Route colors={colors}>Estoque</Route>
        <Route colors={colors}>Histórico</Route>
        <Route colors={colors}>Produtos</Route>
        {permission === "2" ? (
          <Route onClick={() => navigation("/clients")} colors={colors}>
            Clientes
          </Route>
        ) : null}
      </Links>
      <LogOut onClick={logOut} colors={colors}>
        Logout
      </LogOut>
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

const LogOut = styled.button<{ colors: ColorsType }>`
  width: 100%;
  font-size: ${fontSize.large}px;
  color: ${({ colors }) => colors.white};
  font-weight: ${fontConfig.weight.regular};
  font-family: ${fontConfig.roboto};
  border: 0;
  border-top: 2px solid;
  border-top-color: 2px solid ${({ colors }) => colors.white};
  cursor: pointer;
  height: 50px;
  outline: none;
  background-color: ${({ colors }) => colors.primary};
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

const Welcome = styled.h2<{ colors: ColorsType }>`
  font-weight: ${fontConfig.weight.book};
  font-size: ${fontSize.bigger001}px;
  font-family: ${fontConfig.roboto};
  color: ${({ colors }) => colors.white};
  text-align: center;
`;
