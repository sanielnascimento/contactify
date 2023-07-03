import styled from "styled-components";

export const StyledRegister = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 100px);

  section {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    width: 900px;
    max-width: 97%;

    .register-box {
      display: flex;
      width: 50%;
      max-width: 50%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.6rem;
      margin: 2rem 0;

      .register-area {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 350px;
        max-width: 95%;
        height: fit-content;
        max-height: 100%;
        padding: 1.5rem 0 2rem 0;

        border: 1px solid var(--color-red-200);

        > h1 {
          margin-bottom: 1rem;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
          width: 80%;

          > span {
            font-size: var(--font-size-8);
            line-height: 1;
            margin-top: -1rem;
            color: var(--color-error);
          }

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 3.8rem;
            padding: 0 1rem;
            border: none;

            font-weight: 600;
            font-size: 1.6rem;
            margin-top: 1rem;

            color: var(--color-red-600);
            background-color: var(--color-brand);
            border-radius: var(--radius-2);
            transition: 0.3s ease;
            &:hover {
              color: var(--color-red-600);
              background-color: var(--color-primary);
            }
          }
        }
      }

      .login-call {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 350px;
        max-width: 95%;
        min-height: 7rem;
        padding: 1.5rem 0;

        background-color: transparent;
        border: 1px solid var(--color-red-200);

        > a > p {
          &:hover {
            color: var(--color-brand);
            text-decoration: underline;
          }
        }
      }
    }

    .brand-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: space-evenly;
      width: 50%;
      max-width: 50%;
      height: 500px;

      .logo-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 170px;

        .logo {
          max-width: 100%;
          max-height: 100%;
        }
      }

      > p {
        max-width: 70%;
      }

      .illustration-box {
        width: 70%;
        > img {
          max-width: 100%;
          max-height: 100%;
          aspect-ratio: 3/2;
        }
      }
    }

    @media (max-width: 600px) {
      flex-direction: column-reverse;
      gap: 1rem;

      .illustration-box {
        > img {
          display: none;
        }
      }

      .brand-area {
        height: fit-content;
        margin-top: 1rem;
        > p {
          display: none;
        }
      }

      .register-box {
        width: 350px;
        max-width: 100%;
        margin-bottom: 5rem;
        .register-area {
          width: 100%;
          max-width: 100%;
          .register-form {
            width: 90%;
          }
        }
        .login-call {
          width: 350px;
          max-width: 100%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  
  .fade-in {
    opacity: 1;
    transition: opacity 0.25s ease-in;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 0.25s ease-out;
  }

`;
