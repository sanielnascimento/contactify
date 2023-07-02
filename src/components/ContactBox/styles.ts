import { styled } from "styled-components";

export const SContactBox = styled.section`
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  > ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin-top: 1rem;
  }

  @media (min-width: 761px) {
    margin-right: 9.5rem;
    > ul {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 2.5vh 2%;
    }
  }

  @media (min-width: 901px) {
    margin-right: 25rem;
    > ul {
      margin-top: 2rem;
    }
  }

  @media (min-width: 1240px) {
    > ul {
      justify-content: flex-start;
      align-items: flex-start;
      gap: 3vh 2%;
    }
  }
`;
