import { categoryEnum } from "../../providers/ContactsProvider/validators";
import { SContactCard, StyledSelect, StyledOption } from "./styles";

import { iContact } from "../../providers/ContactsProvider/types";
import { ContactUpdateForm } from "../Form/ContactUpdateForm";

import { StyledText } from "../../styles/typography";
import { SlideDeletePopUp } from "./deletePop-up";

import { RiDeleteBin6Line } from "react-icons/ri";
import { MainModal } from "../Modal/MainModal";

import { ChangeEvent, useState } from "react";
import { iContactCardProps } from "./types";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { StyledButton } from "../Button";

import { useContact } from "../../hooks";
import { FiEdit } from "react-icons/fi";

export const ContactCard = ({ contact }: iContactCardProps) => {
  const [toDelete, setToDelete] = useState<string | null>(null);
  const [toUpdate, setToUpdate] = useState<iContact | null>(null);
  const { deleteContact, updateContactCategory, favoriteChange } = useContact();
  const splitName: string[] = contact.name.split(" ");

  const togglePopup = () => setToDelete(null);
  const toggleModal = () => setToUpdate(null);

  const onSubmit = async (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    await updateContactCategory(contact.id, event.target.value);
  };

  
  const initials: string =
    splitName[0][0].toUpperCase() +
    splitName[splitName.length - 1][0].toUpperCase();

  const firstNLaft: string =
    splitName[0] + " " + splitName[splitName.length - 1];

  return (
    <SContactCard>
      {toDelete && (
        <SlideDeletePopUp
          deleteContact={deleteContact}
          togglePopup={togglePopup}
          currentId={contact.id}
        >
          <StyledText
            tag="p"
            className=""
            color="--color-primary"
            text="seven-s"
            lineHeight=""
          >
            {`Deseja excluir ${firstNLaft}?`}
          </StyledText>
        </SlideDeletePopUp>
      )}
      {toUpdate && (
        <MainModal toggleModal={toggleModal}>
          <ContactUpdateForm toggleModal={toggleModal} contact={contact} />
        </MainModal>
      )}
      <div className="identification">
        <StyledText
          tag="h2"
          className=""
          color="--color-red-600"
          text="six-m"
          lineHeight="1"
        >
          {initials}
        </StyledText>
        <StyledText
          tag="p"
          className=""
          color="--color-primary"
          text="five"
          lineHeight=""
        >
          {`${firstNLaft}`}
        </StyledText>
      </div>
      <div className="email">
        <StyledText
          tag="h3"
          className=""
          color="--color-primary"
          text="seven-m"
          lineHeight=""
        >
          Email:
        </StyledText>
        <StyledText
          tag="p"
          className=""
          color="--color-red-100"
          text="seven"
          lineHeight=""
        >
          {`${contact.email}`}
        </StyledText>
      </div>
      <div className="phone">
        <StyledText
          tag="h3"
          className=""
          color="--color-primary"
          text="seven-m"
          lineHeight=""
        >
          Telefone:
        </StyledText>
        <StyledText
          tag="p"
          className=""
          color="--color-red-100"
          text="seven"
          lineHeight=""
        >
          {`${contact.phone}`}
        </StyledText>
      </div>
      <div className="comment">
        <StyledText
          tag="h3"
          className=""
          color="--color-primary"
          text="seven-m"
          lineHeight=""
        >
          Comentário:
        </StyledText>
        <StyledText
          tag="p"
          className=""
          color="--color-red-100"
          text="seven"
          lineHeight=""
        >
          {`${contact.comment}`}
        </StyledText>
      </div>
      <div className="interactive-area">
        <StyledSelect onChange={onSubmit} defaultValue={contact.category}>
          {categoryEnum._def.values.map((option) => (
            <StyledOption key={option} value={option}>
              {option}
            </StyledOption>
          ))}
        </StyledSelect>
        <div>
          <StyledButton
            onClick={() => setToUpdate(contact)}
            buttoncolor="red-50"
            buttonsize="small"
          >
            <FiEdit />
          </StyledButton>
          <StyledButton
            onClick={() => setToDelete(contact.id)}
            buttoncolor="red-50"
            buttonsize="small"
          >
            <RiDeleteBin6Line />
          </StyledButton>
          <StyledButton
            onClick={() => favoriteChange(contact.id)}
            buttoncolor="red-50"
            buttonsize="small"
          >
            { contact.isFavorite ? <FaHeart style={{ color: 'red' }}/> : <FaRegHeart />}
          </StyledButton>
        </div>
      </div>
    </SContactCard>
  );
};
