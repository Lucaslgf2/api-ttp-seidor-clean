import { UtilizacaoVeiculoRepository } from '@/infra/adapters/typeorm/repository/utilizacao-veiculo'

const makeUtilizacaoVeiculoRepository = (): UtilizacaoVeiculoRepository => {
  return new UtilizacaoVeiculoRepository()
}

export const utilizacaoVeiculoRepository = makeUtilizacaoVeiculoRepository()
