import { FindMotoristas } from '@/data/use-cases/motorista/find-motoristas'
import { IFindMotoristas } from '@/domain/protocols/motorista/find-motorista'
import { motoristaRepository } from '@/main/factories/repositories/motorista-repository-factory'

const makeFindMotoristas = (): IFindMotoristas => {
  return new FindMotoristas(motoristaRepository)
}

export const findMotoristas = makeFindMotoristas()
