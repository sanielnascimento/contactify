import { iUser } from "../../providers/AuthProvider/types";

export interface iPainelProps {
    user: iUser | null;
    toggleModal: () => void;
}