import styled from 'styled-components';

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border: none;

  input {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    height: 3.8rem;
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-7);
    line-height: 19px;

    color: var(--color-primary);
    background: var(--color-red-500);
    border: 1px solid var(--color-red-400);
    outline: none;

    transition: 0.3s ease;

    &::placeholder {
      font-weight: var(--font-weight-regular);
      font-size: var(--font-size-7);
      line-height: 19px;

      color: var(--color-red-300);
    }

    &:focus-within, &:hover {
      border: 1px solid var(--color-brand-o);
      outline: var(--color-brand-o);
    }
  }
`;
