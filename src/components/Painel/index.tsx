import { BiHomeHeart, BiSearchAlt2, BiLogOut } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { StyledText } from "../../styles/typography";
import { BsPersonAdd } from "react-icons/bs";
import { StyledButton } from "../Button";

import { StyledPainel, StyledDropdownMenu } from "./styles";
import { iPainelProps } from "./types";
import { useAuth, useContact } from "../../hooks";
import { Input } from "../Input";
import { iClientUpdatePhoto } from "../../providers/AuthProvider/types";
import { clientUpdatePhoto } from "../../providers/AuthProvider/validator";
import { zodResolver } from "@hookform/resolvers/zod";

export const Painel = ({ user, toggleModal }: iPainelProps) => {
  const { logOut, updateClient } = useAuth();
  const { favoritedsRender, favoritedContacts, toggleSearch } = useContact();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iClientUpdatePhoto>({
    resolver: zodResolver(clientUpdatePhoto),
  });

  const onSubmit = async (data: iClientUpdatePhoto) => {
    if (!data.imgUrl) data.imgUrl = undefined;
    await updateClient(data);
    setTimeout(() => toggleDropdown(), 1000);
  };

  if (!user) return null;

  return (
    <StyledPainel>
      {isDropdownOpen && (
        <StyledDropdownMenu noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="input-content">
            <Input
              defaultValue={undefined}
              id="imgUrl"
              type="text"
              placeholder="Nova Url de imagem"
              {...register("imgUrl")}
            />
            {errors.imgUrl && <span>{errors.imgUrl.message}</span>}
          </div>

          <button type="submit">Atualizar foto</button>
          <button
            onClick={() => {
              toggleDropdown();
            }}
            type="button"
          >
            Cancelar
          </button>
        </StyledDropdownMenu>
      )}
      <div className="user-infos">
        <figure className="profile-pic">
          <a href="#top">
            <img src={user.imgUrl} alt="" />
          </a>
          <button onClick={toggleDropdown} className="change-pic" type="button">
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
        <StyledButton
          onClick={toggleSearch}
          buttoncolor="brand"
          buttonsize="large"
          type="button"
        >
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
          {favoritedContacts.length > 0 ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart />
          )}
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
