import { CSSProperties } from 'react'

export interface IConfig {
  component?: string
  className?: string
  id?: string
  styles?: Array<Style>
  onClick?: Function
  onHover?: Function
  onSelected?: Function
  children?: string | Array<IConfig>
}

export interface Style {
  name: string
  value: string
}

export interface BoxElementProps {
  className: string
  style: CSSProperties
  id: string
  children: any
}

export interface TextElementProps {
  className: string
  text:string
  style: CSSProperties
  id: string
  children: any
}

export interface TableElementProps {
  className: string
  text:string
  style: CSSProperties
  id: string
  children: any
}
