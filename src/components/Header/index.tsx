import { StyledText } from "../../styles/typography";
import { Container, StyledHeader } from "./styles";

import { iHeaderProps } from "./types";
import { useAuth } from "../../hooks";
import { BsThreeDotsVertical } from "react-icons/bs";
import { StyledOption, StyledSelect } from "../ContactCard/styles";
import { categoryEnum } from "../../providers/ContactsProvider/validators";
import { ChangeEvent, useState } from "react";
import { MainModal } from "../Modal/MainModal";
import { ClientUpdateForm } from "../Form/ClientUpdateForm";
import { iClient } from "../../providers/AuthProvider/types";
import { SlideDeletePopUp } from "../ContactCard/deletePop-up";

export const Header = ({ client }: iHeaderProps) => {
  const { menuOpen, toggleDropdown } = useAuth();

  const [isDeletingClient, setIsDeletingClient] = useState<iClient | null>(
    null
  );

  const [isUpdatingClient, setIsUpdatingClient] = useState<iClient | null>(
    null
  );

  const toggleClientToUpdate = () => {
    isUpdatingClient ? setIsUpdatingClient(null) : setIsUpdatingClient(client);
  };

  const toggleClientDelete = () => {
    isDeletingClient ? setIsDeletingClient(null) : setIsDeletingClient(client);
  };

  const onSubmit = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  const getDropdownMenuClassName = () => {
    return menuOpen ? "dropdown-menu dropdown-menu-open" : "dropdown-menu";
  };

  if (!client) return;

  return (
    <StyledHeader>
      {isDeletingClient && (
        <SlideDeletePopUp togglePopup={toggleClientDelete}>
          <StyledText
            tag="p"
            className=""
            color="--color-primary"
            text="seven-s"
            lineHeight=""
          >
            Deseja encerrar sua conta?
          </StyledText>
        </SlideDeletePopUp>
      )}
      {isUpdatingClient && (
        <MainModal toggleModal={toggleClientToUpdate}>
          <ClientUpdateForm
            toggleModal={toggleClientToUpdate}
            client={client}
          />
        </MainModal>
      )}

      <Container>
        <a className="brand-box" href="">
          <img
            className="brand-balloon"
            src="/img/balloons-yellow-nobg.png"
            alt=""
          />
          <img
            className="brand-name"
            src="/img/contactify-white-nobg.png"
            alt="Contactify"
          />
        </a>
        <div className="user-info">
          <div className="dropdown-icon" onClick={toggleDropdown}>
            <BsThreeDotsVertical />
          </div>
          <StyledText
            tag="h1"
            className=""
            color="--color-white-fixed"
            text="six-r"
            lineHeight="2.2"
          >
            {client.name.split(" ")[0]}
          </StyledText>
          <figure className="header-figure">
            <img className="header-img" src={client.imgUrl} alt={client.name} />
          </figure>
          {menuOpen && (
            <div className={getDropdownMenuClassName()}>
              <StyledText
                tag="h3"
                lineHeight="1"
                className=""
                color="--color-primary"
                text="seven-m"
              >
                Opções
              </StyledText>
              <div className="select-filter-box">
                <StyledText
                  tag="p"
                  lineHeight="1"
                  className=""
                  color="--color-primary"
                  text="seven"
                >
                  Exibir por categorias
                </StyledText>
                <StyledSelect onChange={onSubmit} defaultValue={"Todos"}>
                  {categoryEnum._def.values.map((option) => (
                    <StyledOption key={option} value={option}>
                      {option}
                    </StyledOption>
                  ))}
                </StyledSelect>
              </div>
              <div className="buttons-filter-box">
                <StyledText
                  tag="p"
                  lineHeight="1"
                  className=""
                  color="--color-primary"
                  text="seven"
                >
                  Opções de perfil
                </StyledText>
                <button
                  onClick={() => {
                    setIsUpdatingClient(client);
                    toggleDropdown();
                  }}
                  type="button"
                >
                  Editar Perfil
                </button>
                <button
                  onClick={() => {
                    setIsDeletingClient(client);
                    toggleDropdown();
                  }}
                  type="button"
                >
                  Excluir Perfil
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </StyledHeader>
  );
};
