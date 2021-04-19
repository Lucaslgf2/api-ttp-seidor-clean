import { IValidation } from '@/presentation/protocols'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makePutVeiculoValidation = (): IValidation => {
  const validations: IValidation[] = []

  // RequiredFieldValidation
  const camposObrigatorios: string[] = [
    'placa',
    'marcaId',
    'corId'
  ]
  for (const field of camposObrigatorios) {
    validations.push(new RequiredFieldValidation(field))
  }

  // TypeValidation
  validations.push(new TypeValidation('placa', 'string', false))
  validations.push(new TypeValidation('marcaId', 'number', false))
  validations.push(new TypeValidation('corId', 'number', false))

  return new ValidationComposite(validations)
}

export const putVeiculoValidation = makePutVeiculoValidation()
