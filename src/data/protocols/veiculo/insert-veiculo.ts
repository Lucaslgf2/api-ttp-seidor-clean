import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'

export interface IDbInsertVeiculo {
  insert: (veiculoModel: IVeiculoModel) => Promise<IVeiculoModel>
}
