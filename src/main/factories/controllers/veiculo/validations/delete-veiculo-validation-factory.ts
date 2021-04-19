import { IValidation } from '@/presentation/protocols'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeDeleteVeiculoValidation = (): IValidation => {
  const validations: IValidation[] = []

  // RequiredFieldValidation
  const camposObrigatorios: string[] = [
    'veiculoId'
  ]
  for (const field of camposObrigatorios) {
    validations.push(new RequiredFieldValidation(field))
  }

  // TypeValidation
  validations.push(new TypeValidation('veiculoId', 'number', false))

  return new ValidationComposite(validations)
}

export const deleteVeiculoValidation = makeDeleteVeiculoValidation()
