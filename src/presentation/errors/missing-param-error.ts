export class MissingParamError extends Error {
  constructor (paramName: String) {
    super(`Parâmetro ausente: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
