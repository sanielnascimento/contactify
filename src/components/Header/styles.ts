import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 94%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 761px) {
    max-width: 96%;
  }
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: 7.4vh;
  background-color: var(--color-brand-o);
  z-index: 10;
  transition: height 0.4s ease;
  @media (min-width: 761px) {
    height: 8.4vh;
  }
  
  .brand-box {
    display: flex;
    justify-content: flex-start;
    align-items: end;
    width: fit-content;
    height: fit-content;
    .brand-balloon {
      height: 3rem;
      aspect-ratio: 1/1;
      transition: height 0.4s ease;
    }
    .brand-name {
      height: 2.5rem;
      transition: height 0.4s ease;
    }
    
    @media (min-width: 761px) {
      .brand-balloon{
        height: 3.5rem;
      }
      .brand-name{
        height: 3rem;
      }
    }
  }

  .user-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
  }

  .user-info > h1 {
    margin-top: 0.4rem;
  }

  .header-figure {
    width: 3.7rem;
    aspect-ratio: 1/1;
    margin-top: 0.3rem;
  }

  @media (min-width: 761px) {
    .header-figure {
      width: 4.5rem;
    }
  }

  .header-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    outline: solid 0.2rem var(--color-red-600);
  }

`;
