import { zodResolver } from "@hookform/resolvers/zod";
import { StyledText } from "../../styles/typography";
import { Footer } from "../../components/Footer";

import { Input } from "../../components/Input";
import { registerSchema } from "./validator";
import { useForm } from "react-hook-form";

import { StyledRegister } from "./styles";
import { iRegisterClient } from "./types";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks";
import React from "react";


const Register = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
  const [fadeIn, setFadeIn] = React.useState(true);
  const { signUp, images } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterClient>({
    resolver: zodResolver(registerSchema),
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(false);

      setTimeout(() => {
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextImageIndex);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);

  return (
    <>
      <StyledRegister>
        <section>
          <div className="register-box">
            <div className="register-area">
              <StyledText
                tag="h1"
                className=""
                color="--color-primary"
                text="five"
                lineHeight="1"
              >
                Registro
              </StyledText>
              <form
                noValidate
                className="register-form"
                onSubmit={handleSubmit(signUp)}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Nome"
                  {...register("name")}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <Input
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <Input
                  id="phone"
                  type="text"
                  placeholder="Número"
                  {...register("phone")}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <Input
                  id="url-img"
                  type="text"
                  placeholder="Foto (Url)"
                  {...register("imgUrl")}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <Input
                  id="password"
                  type="password"
                  placeholder="Senha"
                  {...register("password")}
                />
                {errors.password && <span>{errors.password.message}</span>}

                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirmar senha"
                  {...register("confirmPassword")}
                />
                {errors.password && <span>{errors.password.message}</span>}
                <button type="submit">Entrar</button>
              </form>
            </div>
            <div className="login-call">
              <StyledText
                tag="p"
                className=""
                color="--color-primary"
                text="height"
                lineHeight=""
              >
                Já é registrado?
              </StyledText>
              <Link to="/login">
                <StyledText
                  tag="p"
                  className=""
                  color="--color-red-200"
                  text="nine"
                  lineHeight="2"
                >
                  Conecte-se aqui!
                </StyledText>
              </Link>
            </div>
          </div>
          <div className="brand-area">
            <figure className="logo-box">
              <img
                className="logo"
                src="/img/contactify-logo-nobg.png"
                alt="logomarca Contactify"
              />
            </figure>
            <StyledText
              tag="p"
              className=""
              color="--color-primary"
              text="seven-m"
              lineHeight=""
            >
              Mantenha sempre ao seu alcance as pessoas que são importantes para
              você.
            </StyledText>
            <figure className="illustration-box">
              <img
                className={fadeIn ? "fade-in" : "fade-out"}
                src={images[currentImageIndex]}
                alt={`image ${images[currentImageIndex]}`}
              />
            </figure>
          </div>
        </section>
      </StyledRegister>
      <Footer />
    </>
  );
};

export default Register;
