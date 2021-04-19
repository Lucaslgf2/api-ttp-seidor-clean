import { Router } from 'express'

export default (router: Router): void => {
  router.get('/utilizacao-veiculos', (req, res) => { res.json({ data: null }) })
  router.post('/utilizacao-veiculos', (req, res) => { res.json({ data: null }) })
  router.patch('/utilizacao-veiculos/utilizacaoVeiculoId', (req, res) => { res.json({ data: null }) })
}
