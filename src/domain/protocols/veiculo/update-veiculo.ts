import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'

export interface IUpdateVeiculo {
  update: (veiculoId: number, veiculoModel: IVeiculoModel) => Promise<IVeiculoModel>
}
