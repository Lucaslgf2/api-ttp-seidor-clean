import { IValidation } from '@/presentation/protocols'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeAuthMiddlewareValidation = (): IValidation => {
  const validations: IValidation[] = []
  const camposObrigatorios: string[] = [
    'authorization'
  ]
  for (const field of camposObrigatorios) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
