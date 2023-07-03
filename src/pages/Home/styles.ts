import { styled } from "styled-components";

export const StyledHome = styled.main`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 6rem auto;
  padding-top: 1rem;
  max-width: 96%;
  @media (min-width: 901px) {
    margin: 6rem auto 4rem auto ;
  }
`;
