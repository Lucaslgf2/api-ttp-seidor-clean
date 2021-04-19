import { RemoveMotorista } from '@/data/use-cases/motorista/remove-motorista'
import { IRemoveMotorista } from '@/domain/protocols/motorista/remove-motorista'
import { motoristaRepository } from '@/main/factories/repositories/motorista-repository-factory'

const makeRemoveMotorista = (): IRemoveMotorista => {
  return new RemoveMotorista(motoristaRepository)
}

export const removeMotorista = makeRemoveMotorista()
