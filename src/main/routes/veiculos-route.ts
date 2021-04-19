import { Router } from 'express'

export default (router: Router): void => {
  router.get('/veiculos', null)
  router.get('/veiculos/:veiculoId', null)
  router.post('/veiculos', null)
  router.put('/veiculos/:veiculoId', null)
  router.delete('/veiculos/:veiculoId', null)
}
