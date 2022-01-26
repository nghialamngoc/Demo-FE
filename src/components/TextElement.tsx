import { Text } from '@chakra-ui/layout'
import { TextElementProps } from '../interfaces'

const TextElement = ({
  className,
  style,
  id,
  children, 
  text ,
  props,
  ...restProps
}: TextElementProps) => {
  return (
      <div>       
        <Text as={props.as} className={className} fontSize={props.fontSize}>{text}</Text>
    </div>
  )
}

export default TextElement
