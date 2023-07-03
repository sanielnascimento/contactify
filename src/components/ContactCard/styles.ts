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
  
  > div{
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 2%;
    flex-wrap: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    >p{
      flex-wrap: nowrap;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1;
    }
  }
  
  .identification{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2%;
    margin-bottom: 1.5rem;
    > h2 {
      display: flex;
      width: 4rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      background-color: var(--color-brand);
    }
  }

  .interactive-area {
    width: 100%;
    height: 3.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.6rem;
    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      padding: 0.5rem 1rem;
      background-color: var(--color-red-400);
      border-radius: var(--radius-2);
      &:hover {
        background: var(--color-red-350);
        color: var(--color-primary);
      }
    }
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
