import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 94%;

  margin: 0 auto;

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
      .brand-balloon {
        height: 3.5rem;
      }
      .brand-name {
        height: 3rem;
      }
    }
  }

  .user-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 1rem;
    > h1 {
      margin-top: 0.4rem;
    }
    @media (min-width: 761px) {
      gap: 2rem;
      > h1 {
        margin-top: 0;
      }
    }
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

    outline: solid 0.2rem var(--color-red-600);
    border-radius: 50%;
  }

  .dropdown-menu {
    position: absolute;
    top: 110%;
    right: 2%;
    z-index: 10;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    padding: 1rem;
    background-color: var(--color-red-500);
    border: 1rem solid var(--color-red-400);
    border-radius: var(--radius-2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    @media (min-width: 761px) {
      top: 130%;
    }

    .select-filter-box {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      width: 100%;
      > select {
        display: block;
        width: 100%;
        padding: 0.5rem;
        border: none;
        font-size: var(--font-size-8);
        font-weight: var(--font-weight-medium);
        color: var(--color-primary);
        border-radius: var(--radius-2);

        background-color: var(--color-red-400);
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
          background-color: var(--color-red-200);
          color: var(--color-red-600);
        }
      }
    }

    .buttons-filter-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.5rem;
      > button {
        display: block;
        width: 100%;
        padding: 0.5rem;
        border: none;
        font-size: var(--font-size-8);
        font-weight: var(--font-weight-medium);
        color: var(--color-primary);
        border-radius: var(--radius-2);

        background-color: var(--color-red-400);
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
          background-color: var(--color-red-200);
          color: var(--color-red-600);
        }
      }
    }
  }

  .dropdown-menu-open {
    transform: translateX(0);
    transition: transform 0.3s ease;
  }

  .dropdown-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-red-600);
    font-size: 3rem;
    width: 4rem;
    aspect-ratio: 1/1;
    line-height: 0;
    transition: font-size 0.2s ease;
    margin-right: -1.5rem;
    cursor: pointer;
    &:hover {
      font-size: 3.6rem;
    }
    @media (max-width: 760px) {
      font-size: 2.5rem;
    }
  }
`;
