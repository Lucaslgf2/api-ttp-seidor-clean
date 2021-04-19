import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { createVeiculo } from '@/main/factories/use-cases/veiculo/create-veiculo-factory'
import { PostVeiculoController } from '@/presentation/controllers/veiculo/post-veiculo-controller'
import { IController } from '@/presentation/protocols'
import { postVeiculoValidation } from './validations/post-veiculo-validation-factory'

const makePostVeiculoController = (): IController => {
  return new PostVeiculoController(postVeiculoValidation, createVeiculo)
}

export const postVeiculoController = adaptRoute(makePostVeiculoController())
