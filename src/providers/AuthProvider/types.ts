import { ReactNode } from "react";
import { tLogin } from "../../pages/Login/types";

export interface iAuthProviderProps {
    children: ReactNode
}

export interface iAuthContextValues {
    signIn: (body: tLogin) => Promise<void>,
    images: Array<string>,
}