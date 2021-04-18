export class InvalidParamError extends Error {
  constructor (paramName: String) {
    super(`Parâmetro inválido: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
