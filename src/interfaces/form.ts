export interface IFormField {
  name?: string
  type?: string
  elementType?: string
  validations: Array<IValidator>
}

interface IValidator {
  type: string
  params: Array<any>
}
