import { AuthContext } from "../providers/AuthProvider";
import React from "react";

export const useAuth = () => {
  const authContext = React.useContext(AuthContext);
  return authContext;
};
