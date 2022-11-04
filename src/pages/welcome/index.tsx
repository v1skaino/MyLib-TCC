import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SvgCar } from "../../assets/svgs/car.svg";
import Label from "../../components/Label";
import { SubmitButton } from "../../components/SubmitButton";
import { colors } from "../../styles/colors";
import { ColorsType } from "../../styles/colors/types";
import { fontConfig, fontSize } from "../../styles/fonts";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <InfoContainer colors={colors}>
        <Logo src={require("../../assets/images/LogoMyLibW.png")} alt="Logo" />
        <Label
          color={colors.white}
          fontWeight={fontConfig.weight.book}
          size={fontSize.bigger003}
        >
          MyLib - O melhor amigo do seu estacionamento
        </Label>
        <Label
          color={colors.white}
          size={fontSize.large}
          fontWeight={fontConfig.weight.book}
          textAlign={"center"}
          pad={"20px 70px"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Label>
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
      <LeftSide>
        <SvgCar color={colors.primary} width="300" height="300" />
        <SubmitButton
          filled={true}
          onPress={() => navigate("/dashboard")}
          height={45}
          label={"Get started"}
          width={35}
        />
      </LeftSide>
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
  width: 60%;
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

const Icons = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-around;
  align-items: center;
`;

const LeftSide = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Welcome;
