import { IValidation } from '@/presentation/protocols'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makePostMotoristaValidation = (): IValidation => {
  const validations: IValidation[] = []

  // RequiredFieldValidation
  const camposObrigatorios: string[] = [
    'nomeMotorista',
    'cpf'
  ]
  for (const field of camposObrigatorios) {
    validations.push(new RequiredFieldValidation(field))
  }

  // TypeValidation
  validations.push(new TypeValidation('nomeMotorista', 'string', false))
  validations.push(new TypeValidation('cpf', 'string', false))

  return new ValidationComposite(validations)
}

export const postMotoristaValidation = makePostMotoristaValidation()
