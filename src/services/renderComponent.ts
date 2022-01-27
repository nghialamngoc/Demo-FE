import { createElement } from 'react'
import BoxElement from '../components/BoxElement'
import TableElement from '../components/TableElement'
import { IConfig, IStyle } from '../interfaces'
import { renderIcon } from './renderIcon'

const keysToComponentMap: any = {
  box: BoxElement,
  table: TableElement,
}

const stylesMap = (styles: IStyle) => {
  let mappedStyles: any = {}
  const keys = Object.keys(styles)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    mappedStyles[key] = styles[key]
  }

  return mappedStyles
}

export const renderComponent = (config: IConfig): any => {
  if (config.component) {
    if (config.isIcon) {
      return renderIcon(config)
    }

    if (typeof keysToComponentMap[config.component] !== 'undefined') {
      return createElement(
        keysToComponentMap[config.component],
        {
          key: 1,
          style: config.styles ? stylesMap(config.styles || {}) : null,
          ...config,
        },
        config.children
          ? config.children instanceof Array
            ? config.children.map((x) => renderComponent(x))
            : config.children
          : null
      )
    }
  }

  return ''
}
