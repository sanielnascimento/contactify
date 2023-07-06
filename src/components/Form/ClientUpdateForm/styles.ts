import { styled } from "styled-components";

export const SClientUpdateteForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  gap: 2rem;
  padding: 2rem 1rem;

  width: 100%;

  background-color: var(--color-red-500);
  border-radius: var(--radius-2);
  
  .input-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 0.5rem;

    width: 100%;
    
    > label {
      font-size: 1.6rem;
      line-height: 1;
    }

    > span {
      font-size: 1.4rem;
      line-height: 1;

      color: var(--color-error);
    }

    > fieldset > input {
      background-color: var(--color-red-600);
      &:hover {
        background-color: var(--color-white-fixed);
      }
    }
  }

  > button {
    margin-top: 1rem;
  }
`;
