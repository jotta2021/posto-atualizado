import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: defaultTheme.colors.primary,
  secondary: defaultTheme.colors.secondary,
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  ${(props) => {
    return `
            background-color: ${buttonVariants[props.variant]};
        `
  }}
`
