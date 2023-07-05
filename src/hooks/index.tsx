import { ContactContext } from "../providers/ContactsProvider";
import { AuthContext } from "../providers/AuthProvider";
import React from "react";

export const useAuth = () => {
  const authContext = React.useContext(AuthContext);
  return authContext;
};

export const useContact = () => {
  const contactContext = React.useContext(ContactContext);
  return contactContext;
};

