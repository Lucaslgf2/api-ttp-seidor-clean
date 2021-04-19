import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { updateVeiculo } from '@/main/factories/use-cases/veiculo/update-veiculo-factory'
import { PutVeiculoController } from '@/presentation/controllers/veiculo/put-veiculo-controller'
import { IController } from '@/presentation/protocols'
import { putVeiculoValidation } from './validations/put-veiculo-validation-factory'

const makePutVeiculoController = (): IController => {
  return new PutVeiculoController(putVeiculoValidation, updateVeiculo)
}

export const putVeiculoController = adaptRoute(makePutVeiculoController())
