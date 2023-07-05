import { styled } from "styled-components";

export const StyledCraateContactModal = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: var(--color-red-008);
  z-index: 100;

  > div {
    position: relative;
    display: flex;

    width: 400px;
    max-width: 96%;

    padding: 1rem;

    background-color: var(--color-red-600);
    border-radius: var(--radius-1);

    .close-modal {
      position: absolute;
      top: -3.5rem;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.1rem;

      font-size: var(--font-size-5);
      font-weight: var(--font-weight-semibold);

      color: var(--color-red-500);
      background: var(--color-red-000);

      border: 2px solid var(--color-red-000);
      outline: none;
      border-radius: 50%;

      opacity: 0.5;

      z-index: 110;

      &:hover {
        opacity: 1;
        border: 2px solid var(--color-red-500);
      }
    }
  }

  @media (min-width: 760px) {
    > div {
      padding: 2rem;
    }
  }
`;
