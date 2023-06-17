import styled, { css } from 'styled-components'
import { TextBase } from './TextBase'

export const StyledText = styled(TextBase)`
  line-height: ${({ lineHeight }) => lineHeight};
  color: var(${({ color }) => (color ? color : '--color-gray-600')});
  transition: 0.5s ease;
  ${({ text }) => {
    switch (text) {
      case 'one':
        return css`
          font-size: var(--font-size-1);
          font-weight: var(--font-weight-bold);
        `
      case 'two':
        return css`
          font-size: var(--font-size-2);
          font-weight: var(--font-weight-semibold);
        `
      case 'three':
        return css`
          font-size: var(--font-size-3);
          font-weight: var(--font-weight-semibold);
        `
      case 'four':
        return css`
          font-size: var(--font-size-4);
          font-weight: var(--font-weight-semibold);
        `
      case 'five':
        return css`
          font-size: var(--font-size-5);
          font-weight: var(--font-weight-semibold);
        `
      case 'six':
        return css`
          font-size: var(--font-size-5);
          font-weight: var(--font-weight-regular);
        `
      case 'seven':
        return css`
          font-size: var(--font-size-7);
          font-weight: var(--font-weight-regular);
        `
      case 'seven-m':
        return css`
          font-size: var(--font-size-7);
          font-weight: var(--font-weight-medium);
        `
      case 'height':
        return css`
          font-size: var(--font-size-8);
          font-weight: var(--font-weight-regular);
        `
      case 'nine':
        return css`
          font-size: var(--font-size-8);
          font-weight: var(--font-weight-bold);
        `
    }
  }}
`