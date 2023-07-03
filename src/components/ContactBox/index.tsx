import { ContactCard } from "../ContactCard"
import { iContactsBoxProps } from "./types"

import { SContactBox } from "./styles"

export const ContactBox = ({contacts}: iContactsBoxProps) => {
  return (
    <SContactBox>
      <ul>
        {contacts.map((x) => <ContactCard key={x.id} contact={x}/>)}
      </ul>
    </SContactBox>
  )
}

