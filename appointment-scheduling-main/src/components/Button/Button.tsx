import { ButtonProps } from './Button.props'
import { ButtonContainer } from './Button.styles'

export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Click me</ButtonContainer>
}
