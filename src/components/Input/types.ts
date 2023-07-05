import { InputHTMLAttributes } from 'react'

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'email' | 'number'
  }
  