import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { removeVeiculo } from '@/main/factories/use-cases/veiculo/remove-veiculo-factory'
import { DeleteVeiculoController } from '@/presentation/controllers/veiculo/delete-veiculo-controller'
import { IController } from '@/presentation/protocols'
import { deleteVeiculoValidation } from './validations/delete-veiculo-validation-factory'

const makeDeleteVeiculoController = (): IController => {
  return new DeleteVeiculoController(deleteVeiculoValidation, removeVeiculo)
}

export const deleteVeiculoController = adaptRoute(makeDeleteVeiculoController())
