import { deleteVeiculoController } from '@/main/factories/controllers/veiculo/delete-veiculo-controller-factory'
import { getVeiculoByIdController } from '@/main/factories/controllers/veiculo/get-veiculo-by-id-controller-factory'
import { getVeiculoController } from '@/main/factories/controllers/veiculo/get-veiculo-controller-factory'
import { postVeiculoController } from '@/main/factories/controllers/veiculo/post-veiculo-controller-factory'
import { putVeiculoController } from '@/main/factories/controllers/veiculo/put-veiculo-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/veiculos', getVeiculoController)
  router.get('/veiculos/:veiculoId', getVeiculoByIdController)
  router.post('/veiculos', postVeiculoController)
  router.put('/veiculos/:veiculoId', putVeiculoController)
  router.delete('/veiculos/:veiculoId', deleteVeiculoController)
}
