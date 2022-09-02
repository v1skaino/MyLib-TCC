import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import styled from "styled-components";
import { Input } from "../../../components/Input";
import { SubmitButton } from "../../../components/SubmitButton";
import { ColorsType } from "../../../styles/colors/types";
import { fontConfig, fontSize } from "../../../styles/fonts";
import { LoginPropsType } from "../types/Login.types";
const LoginLayout = ({
  handlers: { setLoginMail, setSenha },
  localState: { colors, login, loginMail, senha },
}: LoginPropsType) => {
  return (
    <Container>
      <InfoContainer colors={colors}>
        <Logo
          src={require("../../../assets/images/LogoMyLibW.png")}
          alt="Logo"
        />
        <Title colors={colors}>MyLib - O melhor amigo do seu negócio</Title>
        <Description colors={colors}>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Description>
        <Icons>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookSquare color={colors.white} size={30} cursor="pointer" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin color={colors.white} size={30} cursor="pointer" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitterSquare color={colors.white} size={30} cursor="pointer" />
          </a>
        </Icons>
      </InfoContainer>
      <FormContainer colors={colors}>
        <Form
          onSubmit={(e: any) => {
            e.preventDefault();
            login(loginMail, senha);
          }}
          colors={colors}
        >
          <div style={{ width: "100%" }}>
            <Welcome colors={colors}>Bem-Vindo!</Welcome>
            <WelcomeSubtitle colors={colors}>Acesse sua conta</WelcomeSubtitle>
          </div>
          <Input
            type="mail"
            width={60}
            label={"Email"}
            height={40}
            placeholder={"example@mail.com"}
            onChange={(e: any) => setLoginMail(e.target.value)}
          />
          <Input
            type="password"
            width={60}
            label={"Senha"}
            height={40}
            placeholder={"**********"}
            onChange={(e: any) => setSenha(e.target.value)}
          />
          <SubmitButton label={"Login"} height={40} width={60} filled={true} />
          <ForgottPass colors={colors}>Esqueceu a senha?</ForgottPass>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

//Purple Side - Info

const InfoContainer = styled.div<{ colors: ColorsType }>`
  width: 55%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ colors }) => colors.primary};
  row-gap: 30px;
`;

const Logo = styled.img`
  width: 35%;
`;

const Title = styled.h1<{ colors: ColorsType }>`
  font-family: ${fontConfig.roboto};
  font-weight: ${fontConfig.weight.book};
  font-size: ${fontSize.bigger003}px;
  color: ${({ colors }) => colors.white};
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
`;

const Description = styled.p<{ colors: ColorsType }>`
  font-family: ${fontConfig.roboto};
  font-weight: ${fontConfig.weight.book};
  font-size: ${fontSize.large}px;
  color: ${({ colors }) => colors.white};
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
`;

const Icons = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-around;
  align-items: center;
`;

//White Side - Form

const FormContainer = styled.div<{ colors: ColorsType }>`
  width: 45%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ colors }) => colors.white};
`;

const Form = styled.form<{ colors: ColorsType }>`
  width: 70%;
  height: 70vh;
  display: flex;
  background-color: ${({ colors }) => colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.22);
`;

const Welcome = styled.h2<{ colors: ColorsType }>`
  font-family: ${fontConfig.roboto};
  font-weight: ${fontConfig.weight.book};
  font-size: ${fontSize.bigger003}px;
  color: ${({ colors }) => colors.primary};
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
`;

const WelcomeSubtitle = styled.h2<{ colors: ColorsType }>`
  font-family: ${fontConfig.roboto};
  font-weight: ${fontConfig.weight.book};
  font-size: ${fontSize.xlarge01}px;
  color: ${({ colors }) => colors.primary};
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 5%;
`;

const ForgottPass = styled.p<{ colors: ColorsType }>`
  font-family: ${fontConfig.roboto};
  font-weight: ${fontConfig.weight.book};
  font-size: ${fontSize.large}px;
  color: ${({ colors }) => colors.grey02};
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${({ colors }) => colors.primary};
  }
`;

export default LoginLayout;
