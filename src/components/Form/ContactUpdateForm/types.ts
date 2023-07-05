import { iContact } from "../../../providers/ContactsProvider/types"

export interface iContactUpdateFormProps {
    toggleModal: () => void
    contact: iContact
}