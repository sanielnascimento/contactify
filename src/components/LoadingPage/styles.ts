import { styled } from "styled-components";

export const StyledLoading = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  .loading-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 8rem;

    width: fit-content;
    height: 200px;

    gap: 1rem;
    > img {
      max-width: 100%;
      width: 100px;
    }

    .logoname {
      width: 150px;
    }
  }

  .spinner {
    font-size: 8rem;
    animation: spin infinite 1s linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
