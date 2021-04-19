/* eslint-disable valid-typeof */
import { InvalidParamError } from '@/presentation/errors'
import { IValidation } from '@/presentation/protocols'

export class TypeValidation implements IValidation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldType: 'string' | 'number' | 'object' | 'boolean',
    private readonly isArray: boolean = false
  ) {}

  validate (input: any): Error {
    if (!this.isArray) {
      return this.verifyType(input[this.fieldName])
    } else {
      return this.verifyArrayTypes(input)
    }
  }

  private verifyType (input: any): Error {
    let formattedInput = input

    // convertendo números para tipos numéricos
    if (this.fieldType === 'number' && !isNaN(input)) {
      formattedInput = +input
    }

    if (typeof formattedInput !== this.fieldType) {
      return new InvalidParamError(this.fieldName)
    }
  }

  private verifyArrayTypes (input: any): Error {
    input[this.fieldName] = Array.isArray(input[this.fieldName])
      ? input[this.fieldName]
      : [input[this.fieldName]]

    const errors = input[this.fieldName]
      .map(el => this.verifyType(el))
      .filter(el => el !== undefined)
    return errors.length ? errors[0] : undefined
  }
}
