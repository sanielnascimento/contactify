export interface iDeletePopupProps {
    togglePopup: () => void
    deleteContact: (contactId: string) => Promise<void>
    currentId: string;
    children: React.ReactNode
}