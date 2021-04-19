import { FindVeiculoById } from '@/data/use-cases/veiculo/find-veiculo-by-id'
import { IFindVeiculoById } from '@/domain/protocols/veiculo/find-veiculo'
import { veiculoRepository } from '@/main/factories/repositories/veiculo-repository-factory'

const makeFindVeiculoById = (): IFindVeiculoById => {
  return new FindVeiculoById(veiculoRepository)
}

export const findVeiculoById = makeFindVeiculoById()
