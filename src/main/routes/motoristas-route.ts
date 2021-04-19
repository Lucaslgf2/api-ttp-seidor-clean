import { Router } from 'express'

export default (router: Router): void => {
  router.get('/motoristas', null)
  router.get('/motoristas/:motoristaId', null)
  router.post('/motoristas', null)
  router.put('/motoristas/:motoristaId', null)
  router.delete('/motoristas/:motoristaId', null)
}
