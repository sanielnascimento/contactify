import {
  contactSchema,
  contactCreateSchema,
  contactUpdateSchema,
  contactUpdateCategory,
} from "./validators";

import { ReactNode } from "react";
import { z } from "zod";

export type iContact = z.infer<typeof contactSchema>;
export type iCreateContact = z.infer<typeof contactCreateSchema>;
export type iUpdateContact = z.infer<typeof contactUpdateSchema>;
export type iUpdateContactCategory = z.infer<typeof contactUpdateCategory>;

export interface iContactProviderProps {
  children: ReactNode;
}

export type SearchFormInput = {
  searchQuery: string;
};

export interface iContactContextValues {
  updateContactCategory: (cttId: string, category: string) => Promise<void>;
  updateContact: (cttId: string, body: iUpdateContact) => Promise<void>;
  createContact: (body: iCreateContact) => Promise<void>;
  favoriteChange: (cttId: string) => Promise<void>;
  deleteContact: (cttId: string) => Promise<void>;
  searchContacts: (word: SearchFormInput) => void;
  favoritedContacts: iContact[];
  favoritedsRender: () => void;
  searchResults: iContact[];
  toggleSearch: () => void;
  toggleModal: () => void;
  isShowSearch: boolean;
  isOpenModal: boolean;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  imgUrl: string;
  createdAt: string;
}
