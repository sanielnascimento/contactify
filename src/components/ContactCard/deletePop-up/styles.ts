import { styled } from "styled-components";

export const SDeletePopup = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: var(--color-red-008);
  z-index: 100;

  .slide-window {
    position: fixed;
    top: 9rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    width: 400px;
    max-width: 96%;

    padding: 2rem;

    background-color: var(--color-red-600);
    border-radius: var(--radius-1);
    transition: transform 0.5s;

    .delete-identification {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      gap: 2%;

      margin-bottom: 1.5rem;

      > .delete-img {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-brand);
        border-radius: 50%;
        font-size: var(--font-size-2);
        color: var(--color-red-600);
        padding: 0.3rem;
      }
    }

    .buttonbox {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      button {
        width: 46%;
        color: var(--color-red-600);
        background-color: var(--color-primary);
        opacity: 0.6;
        transition: opacity 0.3s ease;
        &:hover{
          opacity: 1;
        }
      }
    }
  }

  .show {
    transform: translateY(0);
  }

  .hide {
    transform: translateY(-200%);
  }
`;
