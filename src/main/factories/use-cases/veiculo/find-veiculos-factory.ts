import { FindVeiculos } from '@/data/use-cases/veiculo/find-veiculos'
import { IFindVeiculos } from '@/domain/protocols/veiculo/find-veiculo'
import { veiculoRepository } from '@/main/factories/repositories/veiculo-repository-factory'

const makeFindVeiculos = (): IFindVeiculos => {
  return new FindVeiculos(veiculoRepository)
}

export const findVeiculos = makeFindVeiculos()
