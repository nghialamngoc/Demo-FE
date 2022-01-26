import { Button, ButtonGroup, color } from '@chakra-ui/react'
import { ButtonElementProps } from '../interfaces'

const ButtonElement = ({
  className,
  style,
  id,
  children, 
  text ,
  color,
  ...restProps
}: ButtonElementProps) => {
  return (
    <Button className={className} colorScheme={color}>{text}</Button>
  )
}

export default ButtonElement
