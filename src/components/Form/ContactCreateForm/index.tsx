import { contactCreateSchema } from "../../../providers/ContactsProvider/validators";
import { iCreateContact } from "../../../providers/ContactsProvider/types";

import { StyledText } from "../../../styles/typography";
import { zodResolver } from "@hookform/resolvers/zod";

import { SContactCreateForm } from "./styles";
import { useContact } from "../../../hooks";

import { StyledButton } from "../../Button";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";


export const ContactCreateForm = () => {
  const { createContact } = useContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreateContact>({
    resolver: zodResolver(contactCreateSchema),
  });

  const onSubmit =async (data:iCreateContact) => {
    if (!data.comment) {
      data.comment = undefined;      
    }
    createContact(data);   
  }

  return (
    <SContactCreateForm onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="E-mail"
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
          placeholder="Comentário"
          {...register("comment")}
        />
        {errors.comment && <span>{errors.comment.message}</span>}
      </div>
      <StyledButton type="submit" buttoncolor="brand" buttonsize="large">
        Adicionar
      </StyledButton>
    </SContactCreateForm>
  );
};
