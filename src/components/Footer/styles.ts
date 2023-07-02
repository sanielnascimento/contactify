import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  bottom: 42px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 13.4vh;
  width: 100%;
  transition: bottom 0.3s ease-in-out;
  background: linear-gradient(
    180deg,
    var(--color-red-600) 0%,
    var(--color-brand-o) 100%
  );
  box-shadow: 0px -15px 20px 0px var(--color-red-600);
  @media (min-width: 761px) {
    bottom: 0;
  }
`;
