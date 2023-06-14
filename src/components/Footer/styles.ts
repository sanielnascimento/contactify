import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 1rem;
  height: 100px;
  width: 100vw;
  background: linear-gradient(
    180deg,
    var(--color-red-600) 0%,
    var(--color-red-300) 100%
  );
  box-shadow: 0px -15px 20px 0px var(--color-red-600);
`;
