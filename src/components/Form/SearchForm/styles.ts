import { styled } from "styled-components";

export const StyledSearchForm = styled.form`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 100%;
  height: 7.4vh;

  background-color: var(--color-brand-o) 0.5;
  z-index: 11;

  transition: height 0.4s ease;

  @media (min-width: 761px) {
    height: 8.4vh;
  }
  .form-containter {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    width: 500px;
    max-width: 96%;
    height: 6vh;

    background-color: var(--color-red-500);
    border-radius: var(--radius-2);

    .input-content {
      width: 73%;
      height: 100%;
      > input {
        padding: 0 0.5rem;
        width: 100%;
        height: 100%;

        font-size: var(--font-size-7);
        font-weight: var(--font-weight-medium);
        color: var(--color-primary);

        border-radius: var(--radius-2);
        background-color: var(--color-red-500);
        outline: none;
        border: 1px solid transparent;
        &::placeholder {
          font-size: var(--font-size-7);
          font-weight: var(--font-weight-medium);
          color: var(--color-red-300);
        }
        &:hover,
        :focus-within {
          border: 1px solid var(--color-brand-o);
          background-color: var(--color-red-400);
          &::placeholder {
            color: var(--color-brand-o);
          }
        }
      }
    }
    .search-buttons-box {
      width: 25%;
      height: 100%;

      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      
      > button {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding: 0 .5rem;

        color: var(--color-primary);
        background-color: var(--color-red-500);
        border: 0.1rem solid var(--color-red-500);
        border-radius: var(--radius-2);
        transition: background-color 0.3s ease;
        
        > svg {
            font-size: 2.8rem;
        }
        
        &:hover {
            background-color: var(--color-red-400);
            border: 0.1rem solid var(--color-red-400);
        }
      }
    }
  }
`;
