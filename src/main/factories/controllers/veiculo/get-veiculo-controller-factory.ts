import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { findVeiculos } from '@/main/factories/use-cases/veiculo/find-veiculos-factory'
import { GetVeiculoController } from '@/presentation/controllers/veiculo/get-veiculo-controller'
import { IController } from '@/presentation/protocols'
import { getVeiculoValidation } from './validations/get-veiculo-validation-factory'

const makeGetVeiculoController = (): IController => {
  return new GetVeiculoController(getVeiculoValidation, findVeiculos)
}

export const getVeiculoController = adaptRoute(makeGetVeiculoController())
