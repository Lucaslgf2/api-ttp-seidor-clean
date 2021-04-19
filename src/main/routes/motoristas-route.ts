import { deleteMotoristaController } from '@/main/factories/controllers/motorista/delete-motorista-controller-factory'
import { getMotoristaByIdController } from '@/main/factories/controllers/motorista/get-motorista-by-id-controller-factory'
import { getMotoristaController } from '@/main/factories/controllers/motorista/get-motorista-controller-factory'
import { postMotoristaController } from '@/main/factories/controllers/motorista/post-motorista-controller-factory'
import { putMotoristaController } from '@/main/factories/controllers/motorista/put-motorista-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/motoristas', getMotoristaController)
  router.get('/motoristas/:motoristaId', getMotoristaByIdController)
  router.post('/motoristas', postMotoristaController)
  router.put('/motoristas/:motoristaId', putMotoristaController)
  router.delete('/motoristas/:motoristaId', deleteMotoristaController)
}
