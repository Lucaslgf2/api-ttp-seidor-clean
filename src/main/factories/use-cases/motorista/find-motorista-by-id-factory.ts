import { FindMotoristaById } from '@/data/use-cases/motorista/find-motorista-by-id'
import { IFindMotoristaById } from '@/domain/protocols/motorista/find-motorista'
import { motoristaRepository } from '@/main/factories/repositories/motorista-repository-factory'

const makeFindMotoristaById = (): IFindMotoristaById => {
  return new FindMotoristaById(motoristaRepository)
}

export const findMotoristaById = makeFindMotoristaById()
