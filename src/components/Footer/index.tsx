import { StyledText } from "../../styles/typography";
import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledText
        tag="p"
        className=""
        color="--color-primary"
        text="height"
        lineHeight="19px"
      >
        © 2023 Contactify - Todos os direitos reservados
      </StyledText>
    </StyledFooter>
  );
};
