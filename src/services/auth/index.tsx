import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../api/api";

interface IAuthContext {
  logged: boolean;

  login(email: string, senha: string): void;

  logOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const AuthProvider = ({ children }: any) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@myLib-home:logged");
    return !!isLogged;
  });

  const login = async (email: string, senha: string) => {
    console.log(email + senha);
    await api
      .post("usuario/login", {
        email: email,
        senha: senha,
      })

      .then(async (res) => {
        var resposta = res.data;
        if (resposta === true) {
          await api
            .get(`usuario/userInfo/${email}`)
            .then((response) => {
              localStorage.setItem(
                "@InfoUser:type",
                `${response.data.roles[0].id}`,
              );
              localStorage.setItem("@InfoUser:name", `${response.data.nome}`);
              localStorage.setItem("@InfoUser:email", email);
            })
            .finally(() => {
              let userName = localStorage.getItem("@InfoUser:name");
              setLogged(true);
              localStorage.setItem("@myLib-home:logged", "true");
              toast.success(`Bem vindo ${userName}!`);
            });
        } else {
          toast.error("Email ou senha incorretos, tente novamente");
        }
      })
      .catch(() => {
        toast.error("Email ou senha incorretos, tente novamente");
      });
  };

  const logOut = () => {
    setLogged(false);
    localStorage.removeItem("@myLib-home:logged");
    localStorage.removeItem("@InfoUser:type");
    localStorage.removeItem("@InfoUser:email");
    localStorage.removeItem("@InfoUser:name");
  };

  return (
    <AuthContext.Provider value={{ logged, logOut, login }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
