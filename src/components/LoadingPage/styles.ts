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

    width: fit-content;
    height: 200px;

    gap: 2rem;
  }

  .spinner {
    font-size: 8rem;
    animation: spin infinite 2s linear;
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
