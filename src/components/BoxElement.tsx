import { Box } from '@chakra-ui/layout'
import { BoxElementProps } from '../interfaces'

const BoxElement = ({
  className,
  style,
  id,
  children,
  ...restProps
}: BoxElementProps) => {
  return (
    <Box id={id} className={className} style={style} {...restProps}>
      {children}
    </Box>
  )
}

export default BoxElement
