import { IUtilizacaoVeiculoModel } from '@/domain/models/utilizacao-veiculo/utilizacao-veiculo-model'

export interface IDbUpdateUtilizacaoVeiculoById {
  updateById: (utilizacaoVeiculoId: number, utilizacaoVeiculoModel: IUtilizacaoVeiculoModel) => Promise<IUtilizacaoVeiculoModel>
}
