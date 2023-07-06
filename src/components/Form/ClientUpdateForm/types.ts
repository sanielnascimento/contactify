import { iClient } from "../../../providers/AuthProvider/types"

export interface iClientUpdateFormProps {
    toggleModal: () => void
    client: iClient
}