import { IUtilizacaoVeiculoModel } from '@/domain/models/utilizacao-veiculo/utilizacao-veiculo-model'

export interface IDbInsertUtilizacaoVeiculo {
  insert: (utilizacaoVeiculoModel: IUtilizacaoVeiculoModel) => Promise<IUtilizacaoVeiculoModel>
}
