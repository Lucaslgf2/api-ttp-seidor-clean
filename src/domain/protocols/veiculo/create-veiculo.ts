import { IInsertVeiculoModel, IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'

export interface ICreateVeiculo {
  create: (insertVeiculoModel: IInsertVeiculoModel) => Promise<IVeiculoModel>
}
