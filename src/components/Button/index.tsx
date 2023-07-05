import styled, { css } from "styled-components";
import { iButtonProps } from "./types";

export const StyledButton = styled.button<iButtonProps>`
  width: 100%;
  height: 3.8rem;

  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-7);

  color: var(--color-white-fixed);

  border-radius: var(--radius-2);
  transition: 0.3s;

  &:active {
    box-shadow: 0 5px var(--color-red-100);
    transform: translateY(4px);
  }

  ${({ buttonsize }) => {
    switch (buttonsize) {
      case "large":
        return css`
          padding: 0 1.6rem;
        `;

      case "small":
        return css`
          padding: 0.8rem 2rem;
          width: fit-content;
          height: fit-content;
        `;
    }
  }}

  ${({ buttoncolor }) => {
    switch (buttoncolor) {
      case "brand":
        return css`
          background-color: var(--color-brand);
          border: 0.1rem solid var(--color-brand);
          &:hover {
            background-color: var(--color-red-100);
            border: 0.1rem solid var(--color-primary);
          }
        `;
      case "red-60":
        return css`
          color: var(--color-primary);
          background-color: var(--color-red-600);
          border: 0.1rem solid var(--color-red-600);
    
          &:hover {
            background-color: var(--color-red-500);
            border: 0.1rem solid var(--color-red-500);
          }
        `;
      case "red-50":
        return css`
          color: var(--color-primary);
          background-color: var(--color-red-500);
          border: 0.1rem solid var(--color-red-500);
        `;
    }
  }}
`;
