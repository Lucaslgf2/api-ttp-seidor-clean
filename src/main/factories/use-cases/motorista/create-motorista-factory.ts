import { CreateMotorista } from '@/data/use-cases/motorista/create-motorista'
import { ICreateMotorista } from '@/domain/protocols/motorista/create-motorista'
import { motoristaRepository } from '@/main/factories/repositories/motorista-repository-factory'

const makeCreateMotorista = (): ICreateMotorista => {
  return new CreateMotorista(motoristaRepository)
}

export const createMotorista = makeCreateMotorista()
