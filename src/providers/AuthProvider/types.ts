import { iRegisterClient } from "../../pages/Register/types";
import { tLogin } from "../../pages/Login/types";
import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
import { iContact } from "../ContactsProvider/types";

export interface iAuthProviderProps {
  children: ReactNode;
}

export interface iAuthContextValues {
  setContacts: React.Dispatch<React.SetStateAction<iContact[]>>
  setLoading: (value: React.SetStateAction<boolean>) => void
  signUp: (body: iRegisterClient) => Promise<void>;
  signIn: (body: tLogin) => Promise<void>;
  navigate: NavigateFunction;
  images: Array<string>;
  contacts: iContact[];
  owner: iUser | null;
  logOut: () => void;
  loading: boolean;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  imgUrl: string;
  createdAt: string;
}
