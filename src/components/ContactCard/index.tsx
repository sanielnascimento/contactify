import { StyledText } from "../../styles/typography";
import { RiDeleteBin6Line } from "react-icons/ri";

import { iContactCardProps } from "./types";
import { BiHeart } from "react-icons/bi";

import { StyledButton } from "../Button";
import { SContactCard } from "./styles";

import { FiEdit } from "react-icons/fi";

export const ContactCard = ({ contact }: iContactCardProps) => {
  const splitName: string[] = contact.name.split(" ");

  const initials: string =
    splitName[0][0].toUpperCase() +
    splitName[splitName.length - 1][0].toUpperCase();
    

  return (
    <SContactCard>
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
          {`${contact.name}`}
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
        <StyledText
          tag="span"
          className=""
          color="--color-red-300"
          text="height"
          lineHeight=""
        >
          {`${contact.category}`}
        </StyledText>
        <div>
          <StyledButton buttoncolor="red-50" buttonsize="small">
            <FiEdit />
          </StyledButton>
          <StyledButton buttoncolor="red-50" buttonsize="small">
            <RiDeleteBin6Line />
          </StyledButton>
          <StyledButton buttoncolor="red-50" buttonsize="small">
            <BiHeart />
          </StyledButton>
        </div>
      </div>
    </SContactCard>
  );
};
