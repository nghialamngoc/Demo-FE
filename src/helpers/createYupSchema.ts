import * as yup from 'yup'

export function createYupSchema(schema: any, config: any) {
  const { name, type, validations = [] } = config
  if (!(yup as any)[type]) {
    return schema
  }

  if (!(yup as any)[type]) {
    return {}
  }

  let validator = (yup as any)[type]()

  validations.forEach((validation: any) => {
    const { params, type } = validation

    if (!validator[type]) {
      return
    }
    validator = validator[type](...params)
  })
  schema[name] = validator

  return schema
}
