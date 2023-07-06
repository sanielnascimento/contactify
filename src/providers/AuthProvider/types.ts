import { clientSchema, registerSchema, clientUpdatePhoto, clientUpdateSchema } from "./validator";
import { iRegisterClient } from "../../pages/Register/types";
import { iContact } from "../ContactsProvider/types";
import { NavigateFunction } from "react-router-dom";
import { tLogin } from "../../pages/Login/types";
import { ReactNode } from "react";
import { z } from "zod";

export interface iAuthProviderProps {
  children: ReactNode;
}

export type iClientUpdatePhoto = z.infer<typeof clientUpdatePhoto>;
export type iClientUpdate = z.infer<typeof clientUpdateSchema>;
export type iClientCreate = z.infer<typeof registerSchema>;
export type iClient = z.infer<typeof clientSchema>;


export interface iAuthContextValues {
  setContacts: React.Dispatch<React.SetStateAction<iContact[]>>
  setLoading: (value: React.SetStateAction<boolean>) => void;
  updateClient: (body: iClientUpdate) => Promise<void>
  signUp: (body: iRegisterClient) => Promise<void>;
  signIn: (body: tLogin) => Promise<void>;
  deleteProfile: () => Promise<void>;
  toggleDropdown: () => void;
  navigate: NavigateFunction;
  images: Array<string>;
  contacts: iContact[];
  owner: iClient | null;
  logOut: () => void;
  menuOpen: boolean;  
  loading: boolean;
}

