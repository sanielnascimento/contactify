import styled from "styled-components";

export const StyledPainel = styled.aside`
  position: fixed;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  width: 250px;
  max-width: 30%;
  min-height: 72vh;
  
  gap: 2rem;
  padding: 1.5%;
  
  border-left: 0.1rem solid var(--color-brand-o);
  
  @media (min-width: 761px) {
    top: 6rem;
    right: 0;
    bottom: 0;
    padding: 2rem 1%;
  }

  .user-infos {
    display: flex;
    flex-direction: column;
    align-items: center;
  
    width: 100%;
  
    padding: 4% 0;
    gap: 1rem;

    .profile-pic {
      position: relative;
  
      width: 17rem;
      max-width: 100%;
  
      &:hover {
        .change-pic {
          display: flex;
        }
      }

      > a > img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
  
        border-radius: 50%;
        outline: 0.2rem solid var(--color-brand-o);
      }
      .change-pic {
        position: absolute;
        bottom: 7%;
        right: 7%;

        display: none;
        justify-content: center;
        align-items: center;
     
        font-size: 2.5rem;
        line-height: 0.5;
        
        color: var(--color-primary);
        background: var(--color-red-600);
        
        outline: none;
        border: none;
        border-radius: 6px;
        
      }
    }

    .infos {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      
      gap: 0.5rem;
      max-width: 100%;
    }
  }

  .interactive {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    gap: 0.5rem;
    
    width: 100%;

    > button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      
      gap: 1.5rem;
      
      color: var(--color-primary);
      background-color: var(--color-red-600);
      border: 0.1rem solid var(--color-red-600);
      transition: gap 0.3s ease;
      
      > svg {
        font-size: 2.5rem;
        transition: font-size 0.3s ease;
      }
      
      @media (max-width: 900px) {
        width: 6rem;
        > span {
          display: none;
        }
      }
      &:hover {
        background-color: var(--color-red-500);
        border: 0.1rem solid var(--color-red-500);
        
        gap: 1.2rem;
        
        > svg {
          font-size: 2.8rem;
        }
      }
    }
  }
  @media (max-width: 900px) {
    width: fit-content;

    .user-infos {
      display: none;
    }
    .interactive {
      > button {
        width: 6rem;
        > span {
          display: none;
        }
      }
    }
  }
  @media (max-width: 760px) {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    
    flex-direction: row;
    
    width: 100%;
    height: 4.5rem;
    min-height: 4.5rem;
    max-width: 100%;
    
    background-color: var(--color-brand-o);
    transition: position 0.3s ease-in-out;
    z-index: 99;

    .interactive {
      flex-direction: row;
      justify-content: center;
    
      > button {
        color: var(--color-red-600);
        background: transparent;
        outline: none;
        border: none;
        width: 6rem;
    
        &:hover {
          background-color: var(--color-primary);
          border: 0.1rem solid var(--color-primary);
        }
    
        > span {
          display: none;
        }
      }
    }
  }
`;

export const StyledDropdownMenu = styled.form`
  position: absolute;
  top: 21rem;
  left: 2%;
  right: 2%;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.5rem;
  background-color: var(--color-red-500);
  border: .5rem solid var(--color-red-400);
  border-radius: var(--radius-2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  > div > input {
    background-color: var(--color-red-200);
  }

  > button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-size: var(--font-size-8);
    font-weight: var(--font-weight-medium);
    color: var(--color-primary);
    border-radius: var(--radius-2);

    background-color: var(--color-red-400);
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: var(--color-red-200);
      color: var(--color-red-600);
    }
  }
`;