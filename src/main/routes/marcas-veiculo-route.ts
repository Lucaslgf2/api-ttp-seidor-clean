import { getMarcaVeiculoController } from '@/main/factories/controllers/marca-veiculo/get-marca-veiculo-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/marcas-veiculo', getMarcaVeiculoController)
}
