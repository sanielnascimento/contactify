import { clientUpdateSchema } from "../../../providers/AuthProvider/validator";
import { iClientUpdate } from "../../../providers/AuthProvider/types";

import { StyledText } from "../../../styles/typography";
import { zodResolver } from "@hookform/resolvers/zod";

import { iClientUpdateFormProps } from "./types";
import { SClientUpdateteForm } from "./styles";

import { StyledButton } from "../../Button";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks";

import { Input } from "../../Input";
import { useEffect } from "react";

export const ClientUpdateForm = ({
  client,
  toggleModal,
}: iClientUpdateFormProps) => {
  const { updateClient } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<iClientUpdate>({
    resolver: zodResolver(clientUpdateSchema),
  });

  useEffect(() => {
    setValue("name", client.name);
    setValue("phone", client.phone);
    setValue("imgUrl", client.imgUrl);
    setValue("email", client.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: iClientUpdate) => {

    client.imgUrl == data.imgUrl && delete data.imgUrl;
    client.email == data.email && delete data.email;
    client.phone == data.phone && delete data.phone;
    client.name == data.name && delete data.name;
    data.password == "generic" && delete data.password;
    data.confirmPassword == "generic" && delete data.confirmPassword;

    await updateClient(data);
    setTimeout(() => toggleModal(), 1000);
  };

  return (
    <SClientUpdateteForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <StyledText
        tag="h2"
        text="six-m"
        color="--color-primary"
        lineHeight="1.5"
        className=""
      >
        Atualizar Perfil
      </StyledText>
      <div className="input-content">
        <Input id="name" type="text" placeholder="Nome" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className="input-content">
        <Input
          id="email"
          type="email"
          placeholder="Novo e-mail"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="input-content">
        <Input
          id="phone"
          type="text"
          placeholder="Número"
          {...register("phone")}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div className="input-content">
        <Input
          id="imgUrl"
          type="text"
          placeholder="Nova Url de imagem"
          {...register("imgUrl")}
        />
        {errors.imgUrl && <span>{errors.imgUrl.message}</span>}
      </div>
      <div className="input-content">
        <Input
          defaultValue="generic"
          id="password"
          type="password"
          placeholder="Nova senha"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className="input-content">
        <Input
          defaultValue="generic"
          id="confirmPassword"
          type="password"
          placeholder="Nova senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
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
    </SClientUpdateteForm>
  );
};
