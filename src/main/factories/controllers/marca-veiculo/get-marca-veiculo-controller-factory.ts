import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { findMarcasVeiculo } from '@/main/factories/use-cases/marca-veiculo/find-marca-veiculo-factory'
import { GetMarcaVeiculoController } from '@/presentation/controllers/marca-veiculo/get-marca-veiculo-controller'
import { IController } from '@/presentation/protocols'

const makeGetMarcaVeiculoController = (): IController => {
  return new GetMarcaVeiculoController(findMarcasVeiculo)
}

export const getMarcaVeiculoController = adaptRoute(makeGetMarcaVeiculoController())
