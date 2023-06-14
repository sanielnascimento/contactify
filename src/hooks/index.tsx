import React from "react";
import { AuthContext } from "../providers/AuthProvider";

export const useAuth = () => {
  const authContext = React.useContext(AuthContext);
  return authContext;
};
