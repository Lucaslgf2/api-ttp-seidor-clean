import { BussinessError } from '@/domain/bussiness-errors/bussiness-error'

export class InvalidEmailError extends BussinessError {
  constructor () {
    super('Email informado é inválido')
    this.name = 'InvalidEmailError'
  }
}
