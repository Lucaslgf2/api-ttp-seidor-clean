import { getCorController } from '@/main/factories/controllers/cor/get-cor-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/cores', getCorController)
}
