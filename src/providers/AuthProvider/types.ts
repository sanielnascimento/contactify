import { ReactNode } from "react";
import { tLogin } from "../../pages/Login/types";

export interface iAuthProviderProps {
  children: ReactNode;
}

export interface iAuthContextValues {
  signIn: (body: tLogin) => Promise<void>;
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
