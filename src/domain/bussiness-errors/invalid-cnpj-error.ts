import { BussinessError } from '@/domain/bussiness-errors/bussiness-error'

export class InvalidCNPJError extends BussinessError {
  constructor () {
    super('CNPJ informado é inválido')
    this.name = 'InvalidCNPJError'
  }
}
