import { iAuthContextValues, iAuthProviderProps, iUser } from "./types";
import { tLogin } from "../../pages/Login/types";

import { useNavigate } from "react-router-dom";
import { api } from "../../services";

import React from "react";

export const AuthContext = React.createContext<iAuthContextValues>(
  {} as iAuthContextValues
);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(true);
  const [owner, setOwner] = React.useState<iUser | null>(null);

  const images: Array<string> = [
    "/img/pic-1.jpg",
    "/img/pic-2.jpg",
    "/img/pic-3.jpg",
    "/img/pic-4.jpg",
    "/img/pic-5.jpg",
    "/img/pic-6.jpg",
    "/img/pic-7.png",
    "/img/pic-8.jpg",
  ];

  React.useEffect(() => {
    const token = localStorage.getItem("Contactify:token");

    if (!token) return;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    (async () => {
      const owner = await api.get<iUser>("/clients", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOwner(owner.data);
    })();

    setLoading(false);
  }, []);

  const signIn = async (body: tLogin): Promise<void> => {
    try {
      const resp = await api.post("/login", body);
      const { token } = resp.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("Contactify:token", token);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, images, loading, owner }}>
      {children}
    </AuthContext.Provider>
  );
};
