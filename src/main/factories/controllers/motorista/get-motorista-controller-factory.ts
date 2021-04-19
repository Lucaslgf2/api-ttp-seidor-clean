import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { findMotoristas } from '@/main/factories/use-cases/motorista/find-motoristas-factory'
import { GetMotoristaController } from '@/presentation/controllers/motorista/get-motorista-controller'
import { IController } from '@/presentation/protocols'
import { deleteMotoristaValidation } from './validations/delete-motorista-validation-factory'

const makeGetMotoristaController = (): IController => {
  return new GetMotoristaController(deleteMotoristaValidation, findMotoristas)
}

export const getMotoristaController = adaptRoute(makeGetMotoristaController())
