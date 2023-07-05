import { StyledText } from "../../styles/typography";
import { StyledFooter } from "./styles";
import React from "react";

export const Footer = () => {
  const [footerbottom, setFooterBottm] = React.useState<string>("0");

  const calculateFooterBottm = (pathname: string) => {
    if (pathname === "/login" || pathname === "/register") {
      return "0";
    } else {
      return "42px";
    }
  };

  React.useEffect(() => {
    const { pathname } = window.location;
    const height = calculateFooterBottm(pathname);
    
    setFooterBottm(height);
  }, []);

  return (
    <StyledFooter footerbottom={footerbottom}>
      <StyledText
        tag="p"
        className=""
        color="--color-white-fixed"
        text="height"
        lineHeight="2"
      >
        © 2023 Contactify - Todos os direitos reservados
      </StyledText>
    </StyledFooter>
  );
};
