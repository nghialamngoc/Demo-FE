import { Button, ButtonGroup, color } from '@chakra-ui/react'
import { ButtonElementProps } from '../interfaces'
import { Outlet, Link } from "react-router-dom";

const ButtonElement = ({
  className,
  style,
  id,
  children, 
  text ,
  color,
  ...restProps
}: ButtonElementProps) => {  
  let button:any = <Button className={className} colorScheme={color}>{text}</Button>
  if (restProps.href){
    button =  <Link to="/form-demo"><Button className={className} colorScheme={color}>{text}</Button></Link>
  }  
  return (
    <div>
      {button}     
    </div>
  )
}

export default ButtonElement
