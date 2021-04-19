import { VeiculoRepository } from '@/infra/adapters/typeorm/repository/veiculo-repository'

const makeVeiculoRepository = (): VeiculoRepository => {
  return new VeiculoRepository()
}

export const veiculoRepository = makeVeiculoRepository()
