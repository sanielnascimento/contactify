import { zodResolver } from "@hookform/resolvers/zod";
import { StyledText } from "../../styles/typography";

import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { LoginSchema } from "./validator";

import { StyledLogin } from "./styles";
import { useAuth } from "../../hooks";

import { tLogin } from "./types";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
  const { signIn, images } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({
    resolver: zodResolver(LoginSchema),
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <StyledLogin>
        <section>
          <div className="login-box">
            <div className="login-area">
              <StyledText
                tag="h1"
                className=""
                color="--color-primary"
                text="three"
                lineHeight=""
              >
                Login
              </StyledText>
              <form
                noValidate
                className="login-form"
                onSubmit={handleSubmit(signIn)}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <Input
                  id="password"
                  type="password"
                  placeholder="Senha"
                  {...register("password")}
                />
                {errors.password && <span>{errors.password.message}</span>}
                <button type="submit">Entrar</button>
              </form>
            </div>
            <div className="register-call">
              <StyledText
                tag="p"
                className=""
                color="--color-primary"
                text="height"
                lineHeight=""
              >
                Ainda não possui uma conta?
              </StyledText>
              <Link to="/register">
                <StyledText
                  tag="p"
                  className=""
                  color="--color-red-200"
                  text="nine"
                  lineHeight="2"
                >
                  Clique aqui!
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
                className="clients-illustration"
                src={images[currentImageIndex]}
                alt={`image ${images[currentImageIndex]}`}
              />
            </figure>
          </div>
        </section>
      </StyledLogin>
      <Footer />
    </>
  );
};

export default Login;
