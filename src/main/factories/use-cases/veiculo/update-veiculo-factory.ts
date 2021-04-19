import { UpdateVeiculo } from '@/data/use-cases/veiculo/update-veiculo'
import { IUpdateVeiculo } from '@/domain/protocols/veiculo/update-veiculo'
import { corRepository } from '@/main/factories/repositories/cor-repository-factory'
import { marcaVeiculoRepository } from '@/main/factories/repositories/marca-veiculo-repository-factory'
import { veiculoRepository } from '@/main/factories/repositories/veiculo-repository-factory'

const makeUpdateVeiculo = (): IUpdateVeiculo => {
  return new UpdateVeiculo(corRepository, marcaVeiculoRepository, veiculoRepository)
}

export const updateVeiculo = makeUpdateVeiculo()
