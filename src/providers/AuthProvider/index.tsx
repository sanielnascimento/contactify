import {
  iAuthContextValues,
  iAuthProviderProps,
  iClient,
  iClientUpdate,
} from "./types";
import { iRegisterClient } from "../../pages/Register/types";

import { iContact } from "../ContactsProvider/types";
import { tLogin } from "../../pages/Login/types";

import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import React from "react";

export const AuthContext = React.createContext<iAuthContextValues>(
  {} as iAuthContextValues
);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [contacts, setContacts] = React.useState<Array<iContact>>([]);
  const [owner, setOwner] = React.useState<iClient | null>(null);

  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  const images: Array<string> = [
    "/img/pic-1.jpg",
    "/img/pic-2.jpg",
    "/img/pic-3.jpg",
    "/img/pic-4.jpg",
    "/img/pic-5.jpg",
    "/img/pic-6.png",
    "/img/pic-7.jpg",
    "/img/pic-8.jpg",
    "/img/pic-9.jpg",
    "/img/pic-10.jpg",
    "/img/pic-11.jpg",
    "/img/pic-12.jpg",
    "/img/pic-13.jpg",
  ];

  const token = localStorage.getItem("Contactify:token");

  React.useEffect(() => {
    try {
      setLoading(true);

      if (!token) {
        navigate("/login");
        return;
      }

      (async () => {
        const owner = await api.get<iClient>("/clients", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOwner(owner.data);
      })();
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signUp = async (body: iRegisterClient) => {
    try {
      const resp = await api.post("clients", body);
      resp.status === 201 && setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.log(error);

      console.error(error);
    }
  };

  const updateClient = async (body: iClientUpdate) => {
    try {
      if (Object.values(body).length == 0) return;

      const resp = await api.patch("clients", body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTimeout(() => setOwner(resp.data), 1000);
    } catch (error) {
      console.error("Erro ao atualizar o cliente", error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("Contactify:token");
    setTimeout(() => navigate("/login"), 1000);
  };

  const deleteProfile = async () => {
    try {
      await api.delete("/clients", {
        headers: { Authorization: `Bearer ${token}` },
      });
      logOut()
      console.log("Perfil excluído com sucesso");
    } catch (error) {
      console.error("Erro ao excluir seu perfil", error);
    }
  };

  const signIn = async (body: tLogin): Promise<void> => {
    try {
      const resp = await api.post("/login", body);

      const { token } = resp.data;

      localStorage.setItem("Contactify:token", token);

      const owner = await api.get<iClient>("/clients", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setOwner(owner.data);
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        updateClient,
        toggleDropdown,
        deleteProfile,
        setContacts,
        setLoading,
        contacts,
        menuOpen,
        navigate,
        loading,
        signUp,
        signIn,
        logOut,
        images,
        owner,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
