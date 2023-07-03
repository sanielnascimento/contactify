import { BiHomeHeart, BiSearchAlt2, BiHeart, BiLogOut } from "react-icons/bi";
import { StyledText } from "../../styles/typography";
import { MdPhotoCamera } from "react-icons/md";

import { BsPersonAdd } from "react-icons/bs";
import { StyledButton } from "../Button";

import { StyledPainel } from "./styles";
import { iPainelProps } from "./types";
import { useAuth } from "../../hooks";

export const Painel = ({ user }: iPainelProps) => {
  const { logOut } = useAuth();
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
        <StyledButton buttoncolor="brand" buttonsize="large" type="button">
          <BiSearchAlt2 />
          <span>Pesquisar</span>
        </StyledButton>
        <StyledButton buttoncolor="red-60" buttonsize="large" type="button">
          <BsPersonAdd />
          <span>Novo contato</span>
        </StyledButton>
        <StyledButton buttoncolor="red-50" buttonsize="large" type="button">
          <BiHeart />
          <span>Favoritos</span>
        </StyledButton>
        <StyledButton buttoncolor="red-60" buttonsize="large" type="button">
          <BiHomeHeart />
          <span>Início</span>
        </StyledButton>
        <StyledButton onClick={logOut} buttoncolor="red-60" buttonsize="large" type="button">
          <BiLogOut />
          <span>Sair</span>
        </StyledButton>
      </div>
    </StyledPainel>
  );
};
