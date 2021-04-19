import { Router } from 'express'

export default (router: Router): void => {
  router.get('/environment-variables', (req, res) => {
    res.json({
      data: process.env
    })
  })
}
