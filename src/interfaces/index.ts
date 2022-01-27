import { CSSProperties } from 'react'

export interface IConfig {
  component?: string
  className?: string
  id?: string
  styles?: IStyle
  isIcon?: boolean
  color?: string
  onClick?: Function
  onHover?: Function
  onSelected?: Function
  children?: string | Array<IConfig>
  urlApi?: string
  headers?: Array<ITableHeader>
  canEdit?: boolean
  canDelete?: boolean
}

export interface ITableHeader {
  name?: string
  key?: string
  width?: string | number
}

export interface IStyle {
  [key: string]: string | number | any
}

export interface BoxElementProps {
  className?: string
  style?: CSSProperties
  id?: string
  children?: any
}

export interface ITableElementProps {
  className?: string
  id?: string
  urlApi?: string
  headers?: Array<ITableHeader>
  canEdit?: boolean
  canDelete?: boolean
}

export interface TextElementProps {
  className: string
  text:string
  style: CSSProperties
  id: string
  children: any
  level:string
  props:any
}

export interface TableElementProps {
  className: string
  text:string
  style: CSSProperties
  id: string
  children: any
  cols:any[]
  api:string
}

export interface ButtonElementProps {
  className: string
  text:string
  style: CSSProperties
  id: string
  children: any
  color:string
  href:string
}
