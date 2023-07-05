import { ContactCard } from "../ContactCard";
import { iContactsBoxProps } from "./types";

import { SContactBox } from "./styles";
import { useContact } from "../../hooks";

export const ContactBox = ({ contacts }: iContactsBoxProps) => {
  const { favoritedContacts, searchResults } = useContact();
  
  return (
    <SContactBox>
      <ul>
        {favoritedContacts.length > 0 && favoritedContacts.map((x) => <ContactCard key={x.id} contact={x} />)}
        {contacts.length > 0 && contacts.map((x) => <ContactCard key={x.id} contact={x} />)}
        {searchResults.length > 0 && searchResults.map((x) => <ContactCard key={x.id} contact={x} />)}          
      </ul>
    </SContactBox>
  );
};
