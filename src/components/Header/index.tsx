import { StyledText } from "../../styles/typography";
import { Container, StyledHeader } from "./styles";

import { iHeaderProps } from "./types";


export const Header = ({ user }: iHeaderProps) => {
  if (!user) return;
  
  return (
    <StyledHeader>
      <Container>
        <a className="brand-box" href="">
          <img
            className="brand-balloon"
            src="/img/balloons-yellow-nobg.png"
            alt=""
          />
          <img
            className="brand-name"
            src="/img/contactify-white-nobg.png"
            alt="Contactify"
          />
        </a>
        <div className="user-info">
            <StyledText
              tag="h1"
              className=""
              color="--color-white-fixed"
              text="six-r"
              lineHeight="2.2"
            >
              {user.name}
            </StyledText>
          <figure className="header-figure">
            <img className="header-img" src={user.imgUrl} alt={user.name} />
          </figure>
        </div>
      </Container>
    </StyledHeader>
  );
};
