import { Text } from '@chakra-ui/layout'
import { TextElementProps } from '../interfaces'

const TextElement = ({
  className,
  style,
  id,
  children, 
  text ,
  ...restProps
}: TextElementProps) => {
  return (
    <Text fontSize='xs'>{text}</Text>
  )
}

export default TextElement
