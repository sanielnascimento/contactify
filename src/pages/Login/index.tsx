import React from "react";
import { StyledLogin } from "./styles";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { StyledText } from "../../styles/typography";

const Login = () => {
  const images = [
    "/img/pic-1.jpg",
    "/img/pic-2.jpg",
    "/img/pic-3.jpg",
    "/img/pic-4.jpg",
    "/img/pic-5.jpg",
    "/img/pic-6.jpg",
    "/img/pic-7.png",
    "/img/pic-8.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

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
              <form className="login-form" action="">
                <Input id="email" type="email" placeholder="E-mail" />
                <Input id="password" type="password" placeholder="Senha" />
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

              <a href="">
                <StyledText
                  tag="p"
                  className=""
                  color="--color-brand"
                  text="nine"
                  lineHeight="2"
                >
                  Clique aqui!
                </StyledText>
              </a>
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
              Mantenha sempre ao seu alcance as pessoas e intituições que são
              importantes para você.
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
