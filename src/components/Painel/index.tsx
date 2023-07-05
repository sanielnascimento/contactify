import { BiHomeHeart, BiSearchAlt2, BiLogOut,  } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { StyledText } from "../../styles/typography";
import { MdPhotoCamera } from "react-icons/md";

import { BsPersonAdd } from "react-icons/bs";
import { StyledButton } from "../Button";

import { StyledPainel } from "./styles";
import { iPainelProps } from "./types";
import { useAuth, useContact } from "../../hooks";

export const Painel = ({ user, toggleModal }: iPainelProps) => {
  const { logOut } = useAuth();
  const { favoritedsRender, favoritedContacts, toggleSearch } = useContact();

  if (!user) return;

  return (
    <StyledPainel>
      <div className="user-infos">
        <figure className="profile-pic">
          <a href="#top">
            <img src={user.imgUrl} alt="" />
          </a>
          <button className="change-pic" type="button">
            <MdPhotoCamera />
          </button>
        </figure>
        <div className="infos">
          <StyledText
            tag="h2"
            className=""
            color="--color-red-100"
            text="seven-m"
            lineHeight=""
          >
            {user.name}
          </StyledText>
          <StyledText
            tag="p"
            className=""
            color="--color-red-100"
            text="seven"
            lineHeight="1"
          >
            {`Email: ${user.email}`}
          </StyledText>
          <StyledText
            tag="p"
            className=""
            color="--color-red-100"
            text="seven"
            lineHeight="1"
          >
            {`Fone: ${user.phone}`}
          </StyledText>
        </div>
      </div>
      <div className="interactive">
        <StyledButton onClick={toggleSearch} buttoncolor="brand" buttonsize="large" type="button">
          <BiSearchAlt2 />
          <span>Pesquisar</span>
        </StyledButton>
        <StyledButton
          onClick={toggleModal}
          buttoncolor="red-60"
          buttonsize="large"
          type="button"
        >
          <BsPersonAdd />
          <span>Novo contato</span>
        </StyledButton>
        <StyledButton
          onClick={favoritedsRender}
          buttoncolor="red-50"
          buttonsize="large"
          type="button"
        >
            { favoritedContacts.length > 0 ? <FaHeart style={{ color: 'red' }}/> : <FaRegHeart />}
          <span>Favoritos</span>
        </StyledButton>
        <StyledButton buttoncolor="red-60" buttonsize="large" type="button">
          <BiHomeHeart />
          <span>Início</span>
        </StyledButton>
        <StyledButton
          onClick={logOut}
          buttoncolor="red-60"
          buttonsize="large"
          type="button"
        >
          <BiLogOut />
          <span>Sair</span>
        </StyledButton>
      </div>
    </StyledPainel>
  );
};
