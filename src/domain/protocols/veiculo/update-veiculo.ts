import { IInsertVeiculoModel, IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'

export interface IUpdateVeiculo {
  update: (veiculoId: number, insertVeiculoModel: IInsertVeiculoModel) => Promise<IVeiculoModel>
}
