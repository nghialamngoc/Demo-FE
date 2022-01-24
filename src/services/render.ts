import { createElement } from 'react'
import BoxElement from '../components/BoxElement'
import { IConfig, Style } from '../interfaces'

const keysToComponentMap: any = {
  box: BoxElement,
}

const stylesMap = (styles: Array<Style>) => {
  let mappedStyles: any = {}
  styles.forEach((style: Style) => {
    mappedStyles[style.name] = style.value
  })

  return mappedStyles
}

export const renderComponent = (config: IConfig): any => {
  if (
    config.component &&
    typeof keysToComponentMap[config.component] !== 'undefined'
  ) {
    return createElement(
      keysToComponentMap[config.component],
      {
        style: config.styles ? stylesMap(config.styles || []) : null,
        ...config,
      },
      config.children
        ? config.children instanceof Array
          ? config.children.map((x) => renderComponent(x))
          : config.children
        : null
    )
  }

  return ''
}
