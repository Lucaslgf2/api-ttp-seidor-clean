import { IUtilizacaoVeiculoModel } from '@/domain/models/utilizacao-veiculo/utilizacao-veiculo-model'

export interface IDbFindUtilizacaoVeiculos {
  findAll: () => Promise<IUtilizacaoVeiculoModel[]>
}

export interface IDbFindUtilizacaoVeiculoById {
  findById: (utilizacaoVeiculoId: number) => Promise<IUtilizacaoVeiculoModel>
}
