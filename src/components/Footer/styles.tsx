import styled from "styled-components";
import { iFooterProps } from "./types";

export const StyledFooter = styled.footer<iFooterProps>`
  position: relative;
  bottom: ${(props) => props.footerBottom};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  height: 13.4vh;
  width: 100%;

  background: linear-gradient(
    180deg,
    var(--color-red-600) 0%,
    var(--color-brand-o) 100%
  );

  box-shadow: 0px -15px 20px 0px var(--color-red-600);
  transition: bottom 0.3s ease-in-out;
  
  @media (min-width: 761px) {
    bottom: 0;
  }
`;
