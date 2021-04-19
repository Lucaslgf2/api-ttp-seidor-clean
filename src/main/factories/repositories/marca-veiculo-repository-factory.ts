import { MarcaVeiculoRepository } from '@/infra/adapters/typeorm/repository/marca-veiculo-repository'

const makeMarcaVeiculoRepository = (): MarcaVeiculoRepository => {
  return new MarcaVeiculoRepository()
}

export const marcaVeiculoRepository = makeMarcaVeiculoRepository()
