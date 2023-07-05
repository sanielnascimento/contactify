import { contactUpdateSchema } from "../../../providers/ContactsProvider/validators";
import { iUpdateContact } from "../../../providers/ContactsProvider/types";

import { StyledText } from "../../../styles/typography";
import { zodResolver } from "@hookform/resolvers/zod";

import { iContactUpdateFormProps } from "./types";
import { SContactCreateForm } from "./styles";
import { useContact } from "../../../hooks";

import { StyledButton } from "../../Button";
import { useForm } from "react-hook-form";

import { Input } from "../../Input";
import { useEffect } from "react";

export const ContactUpdateForm = ({
  contact,
  toggleModal,
}: iContactUpdateFormProps) => {
  const { updateContact } = useContact();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<iUpdateContact>({
    resolver: zodResolver(contactUpdateSchema),
  });

  useEffect(() => {
    setValue("name", contact.name);
    setValue("phone", `${contact.phone}`);
    setValue("comment", contact.comment);
    setValue("email", contact.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: iUpdateContact) => {
    contact.comment == data.comment && delete data.comment;
    contact.email == data.email && delete data.email;
    contact.phone == data.phone && delete data.phone;
    contact.name == data.name && delete data.name;

    await updateContact(contact.id, data);    
    setTimeout(() => toggleModal(), 2000);
  };

  return (
    <SContactCreateForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <StyledText
        tag="h2"
        text="six-m"
        color="--color-primary"
        lineHeight="1.5"
        className=""
      >
        Novo contato
      </StyledText>
      <div className="input-content">
        <label htmlFor="name">Nome</label>
        <Input id="name" type="text" placeholder="Nome" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className="input-content">
        <label htmlFor="email">E-mail</label>
        <Input
          id="email"
          type="email"
          placeholder="Novo e-mail"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="input-content">
        <label htmlFor="phone">Número</label>
        <Input
          id="phone"
          type="text"
          placeholder="Número"
          {...register("phone")}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div className="input-content">
        <label htmlFor="comment">Comentário</label>
        <Input
          id="comment"
          type="text"
          placeholder="Novo comentário"
          {...register("comment")}
        />
        {errors.comment && <span>{errors.comment.message}</span>}
      </div>
      <StyledButton type="submit" buttoncolor="brand" buttonsize="large">
        Atualizar
      </StyledButton>
      <StyledButton
        onClick={toggleModal}
        type="button"
        buttoncolor="brand"
        buttonsize="large"
      >
        Cancelar
      </StyledButton>
    </SContactCreateForm>
  );
};
