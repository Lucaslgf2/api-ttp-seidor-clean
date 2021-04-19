import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { findMotoristaById } from '@/main/factories/use-cases/motorista/find-motorista-by-id-factory'
import { GetMotoristaByIdController } from '@/presentation/controllers/motorista/get-motorista-by-id-controller'
import { IController } from '@/presentation/protocols'
import { getMotoristaByIdValidation } from './validations/get-motorista-by-id-validation-factory'

const makeGetMotoristaByIdController = (): IController => {
  return new GetMotoristaByIdController(getMotoristaByIdValidation, findMotoristaById)
}

export const getMotoristaByIdController = adaptRoute(makeGetMotoristaByIdController())
