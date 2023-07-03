import { ReactNode } from "react";
import { tLogin } from "../../pages/Login/types";
import { iRegisterClient } from "../../pages/Register/types";

export interface iAuthProviderProps {
  children: ReactNode;
}

export interface iAuthContextValues {
  signUp: (body: iRegisterClient) => Promise<void>;
  signIn: (body: tLogin) => Promise<void>;
  logOut: () => void;
  images: Array<string>;
  loading: boolean;
  owner: iUser | null;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  imgUrl: string;
  createdAt: string;
}
