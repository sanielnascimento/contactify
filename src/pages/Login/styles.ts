import styled from "styled-components";

export const StyledLogin = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    max-width: 97%;
    height: 500px;

    .login-box {
      display: flex;
      width: 50%;
      max-width: 50%;
      height: 500px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.6rem;

      .login-area {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 350px;
        max-width: 95%;
        height: 300px;

        border: 1px solid var(--color-red-200);

        .login-form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          width: 80%;

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

      .register-call {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 350px;
        max-width: 95%;
        height: 80px;

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
      gap: 2rem;

      .illustration-box {
        > img {
          display: none;
        }
      }
      .brand-area > p {
        display: none;
      }

      .login-box {
        width: 350px;
        max-width: 100%;
        .login-area {
          width: 100%;
          max-width: 100%;
          .login-form {
            width: 90%;
          }
        }
        .register-call {
          width: 350px;
          max-width: 100%;
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
