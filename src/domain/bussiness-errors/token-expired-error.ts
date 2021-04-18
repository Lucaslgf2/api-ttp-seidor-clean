import { BussinessError } from '@/domain/bussiness-errors/bussiness-error'

export class TokenExpiredError extends BussinessError {
  constructor () {
    super('Token de Acesso expirado')
    this.name = 'TokenExpiredError'
  }
}
