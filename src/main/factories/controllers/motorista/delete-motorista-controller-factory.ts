import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { removeMotorista } from '@/main/factories/use-cases/motorista/remove-motorista-factory'
import { DeleteMotoristaController } from '@/presentation/controllers/motorista/delete-motorista-controller'
import { IController } from '@/presentation/protocols'
import { deleteMotoristaValidation } from './validations/delete-motorista-validation-factory'

const makeDeleteMotoristaController = (): IController => {
  return new DeleteMotoristaController(deleteMotoristaValidation, removeMotorista)
}

export const deleteMotoristaController = adaptRoute(makeDeleteMotoristaController())
