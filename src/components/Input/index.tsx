import { forwardRef } from 'react'
import { StyledFieldset } from './style'
import { iInputProps } from './types';

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ type, placeholder, id, ...rest }, ref) => (
    <StyledFieldset>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        {...rest}
        ref={ref}
      />
    </StyledFieldset>
  )
);
