import { FindMarcasVeiculo } from '@/data/use-cases/marca-veiculo/find-marca-veiculo'
import { IFindMarcasVeiculo } from '@/domain/protocols/marca-veiculo/find-marca-veiculo'
import { marcaVeiculoRepository } from '@/main/factories/repositories/marca-veiculo-repository-factory'

const makeFindMarcasVeiculo = (): IFindMarcasVeiculo => {
  return new FindMarcasVeiculo(marcaVeiculoRepository)
}

export const findMarcasVeiculo = makeFindMarcasVeiculo()
