import { styled } from "styled-components";

export const SContactCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 100%;
  height: 22rem;

  padding: 1rem;

  background-color: var(--color-red-500);
  border-radius: var(--radius-2);

  @media (min-width: 761px) {
    width: 48%;
  }

  @media (min-width: 1240px) {
    width: 32%;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    flex-wrap: nowrap;

    gap: 2%;

    overflow-x: hidden;
    text-overflow: ellipsis;

    > p {
      flex-wrap: nowrap;
      white-space: nowrap;

      line-height: 1;

      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .identification {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 2%;

    margin-bottom: 1.5rem;

    > h2 {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 4rem;
      aspect-ratio: 1/1;

      background-color: var(--color-brand);
      border-radius: 50%;
    }
  }

  .interactive-area {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 3.8rem;

    gap: 0.6rem;

    > div {
      display: flex;

      gap: 0.6rem;

      button {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.9rem;

        padding: 0.5rem 1rem;

        &:hover {
          background: var(--color-red-350);
        }
      }
    }
  }
`;

export const StyledSelect = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  width: fit-content;
  
  padding: 0.4rem;
  gap: 1rem;
  
  font-size: var(--font-size-8);
  font-weight: var(--font-weight-semibold);
  
  color: var(--color-red-600);
  background: var(--color-brand-o);
  border-radius: var(--radius-2);
  
  border: none;
  outline: none;
`;

export const StyledOption = styled.option`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;

  font-size: var(--font-size-8);
  font-weight: var(--font-weight-medium);
  
  padding: 0.2rem;
  
  color: var(--color-primary);
  background: var(--color-red-400);
  
  outline: none;
  border: none;  
`;
