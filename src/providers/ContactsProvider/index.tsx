import { useAuth } from "../../hooks";
import { api } from "../../services";
import React from "react";

import {
  SearchFormInput,
  iContact,
  iContactContextValues,
  iContactProviderProps,
  iCreateContact,
  iUpdateContact,
} from "./types";

export const ContactContext = React.createContext<iContactContextValues>(
  {} as iContactContextValues
);

export const ContactProvider = ({ children }: iContactProviderProps) => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [isShowSearch, setIsShowSearch] = React.useState<boolean>(false);
  const [searchResults, setSearchResults] = React.useState<iContact[]>([]);
  const [favoritedContacts, setFavoritedContacts] = React.useState<iContact[]>([]);
  const { contacts, setContacts } = useAuth();

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const toggleSearch = () => {    
    setIsShowSearch(!isShowSearch);
  }

  const token = localStorage.getItem("Contactify:token");

  const createContact = async (body: iCreateContact) => {
    try {
      const resp = await api.post("contacts", body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts((previwsContacts) => [resp.data, ...previwsContacts]);
      toggleModal();
    } catch (error) {
      console.error("Erro na criação do contato", error);
    }
  };

  const updateContact = async (cttId: string, body: iUpdateContact) => {
    try {
      if (!Object.values(body).length) return;

      const resp = await api.patch(`contacts/${cttId}`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts((preCtt) =>
        preCtt.map((ctt) => (ctt.id === cttId ? resp.data : ctt))
      );
    } catch (error) {
      console.error("Erro ao atualizar o anuncio", error);
    }
  };

  const updateContactCategory = async (cttId: string, category: string) => {
    try {
      const resp = await api.patch(
        `contacts/${cttId}`,
        { category },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setContacts((preCtt) =>
        preCtt.map((ctt) => (ctt.id === cttId ? resp.data : ctt))
      );
    } catch (error) {
      console.error("Erro ao atualizar status do anuncio", error);
    }
  };

  const favoriteChange = async (cttId: string) => {
    try {
      const resp = await api.patch(`contacts/status/${cttId}`, undefined, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts((preCtt) =>
        preCtt.map((ctt) => (ctt.id === cttId ? resp.data : ctt))
      );
    } catch (error) {
      console.error("Erro ao favoritar contato", error);
    }
  };

  const deleteContact = async (cttId: string) => {
    try {
      await api.delete(`contacts/${cttId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts((previwsContacts) =>
        previwsContacts.filter((contact) => contact.id !== cttId)
      );
    } catch (error) {
      console.error("Erro ao deletar contato", error);
    }
  };

  const favoritedsRender = () => {
    const filtered = contacts.filter((ctt) => ctt.isFavorite);
    setFavoritedContacts((preCtt) => (preCtt.length > 0 ? [] : filtered));
  };

  const searchContacts = (word: SearchFormInput) => {
    const searchQuery = word.searchQuery.toLowerCase();
    console.log(searchQuery);
    
    const filteredContacts = contacts.filter((contact) => {
      const { name, email, phone, comment } = contact;
      return (
        name.toLowerCase().includes(searchQuery) ||
        email.toLowerCase().includes(searchQuery) ||
        phone.toString().includes(searchQuery) ||
        comment?.toLowerCase().includes(searchQuery)
      );
    });
    setSearchResults(filteredContacts);
  };

  return (
    <ContactContext.Provider
      value={{
        updateContactCategory,
        favoritedContacts,
        favoritedsRender,
        searchResults,
        searchContacts,
        favoriteChange,
        createContact,
        updateContact,
        deleteContact,
        isShowSearch,
        toggleSearch,
        isOpenModal,
        toggleModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
