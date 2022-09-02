import React from "react";
import { ColorsType } from "../../../styles/colors/types";

export interface LoginPropsType {
  localState: LocalType;
  handlers: HandlersType;
}

interface HandlersType {
  setLoginMail: React.Dispatch<React.SetStateAction<string>>;
  setSenha: React.Dispatch<React.SetStateAction<string>>;
}

interface LocalType {
  colors: ColorsType;
  loginMail: string;
  senha: string;
  login(email: string, senha: string): void;
}
