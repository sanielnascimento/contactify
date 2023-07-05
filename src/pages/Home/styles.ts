import { styled } from "styled-components";

export const StyledHome = styled.main`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  margin: 6rem auto;
  padding-top: 1rem;
  
  width: 100%;
  max-width: 96%;
  
  @media (min-width: 901px) {
    margin: 6rem auto 4rem auto ;
  }
`;
