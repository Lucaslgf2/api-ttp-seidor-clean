import { RemoveVeiculo } from '@/data/use-cases/veiculo/remove-veiculo'
import { IRemoveVeiculo } from '@/domain/protocols/veiculo/remove-veiculo'
import { veiculoRepository } from '@/main/factories/repositories/veiculo-repository-factory'

const makeRemoveVeiculo = (): IRemoveVeiculo => {
  return new RemoveVeiculo(veiculoRepository)
}

export const removeVeiculo = makeRemoveVeiculo()
