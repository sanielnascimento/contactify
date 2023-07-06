import { iClient } from "../../providers/AuthProvider/types";

export interface iPainelProps {
    user: iClient | null;
    toggleModal: () => void;
}