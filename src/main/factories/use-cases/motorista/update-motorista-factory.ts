import { UpdateMotorista } from '@/data/use-cases/motorista/update-motorista'
import { IUpdateMotorista } from '@/domain/protocols/motorista/update-motorista'
import { motoristaRepository } from '@/main/factories/repositories/motorista-repository-factory'

const makeUpdateMotorista = (): IUpdateMotorista => {
  return new UpdateMotorista(motoristaRepository)
}

export const updateMotorista = makeUpdateMotorista()
