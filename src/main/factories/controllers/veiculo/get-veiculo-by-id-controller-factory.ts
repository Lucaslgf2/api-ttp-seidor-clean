import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { findVeiculoById } from '@/main/factories/use-cases/veiculo/find-veiculo-by-id-factory'
import { GetVeiculoByIdController } from '@/presentation/controllers/veiculo/get-veiculo-by-id-controller'
import { IController } from '@/presentation/protocols'
import { getVeiculoByIdValidation } from './validations/get-veiculo-by-id-validation-factory'

const makeGetVeiculoByIdController = (): IController => {
  return new GetVeiculoByIdController(getVeiculoByIdValidation, findVeiculoById)
}

export const getVeiculoByIdController = adaptRoute(makeGetVeiculoByIdController())
