import { useState } from "react";
import { useAuth } from "../../../services/auth";
import { colors } from "../../../styles/colors";
import LoginLayout from "./Login.layout";

const LoginController = () => {
  const [senha, setSenha] = useState<string>("");
  const [loginMail, setLoginMail] = useState<string>("");
  const { login } = useAuth();

  return (
    <LoginLayout
      handlers={{
        setLoginMail,
        setSenha,
      }}
      localState={{
        colors,
        login,
        loginMail,
        senha,
      }}
    />
  );
};

export default LoginController;
