import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'

export interface IDbUpdateVeiculoById {
  updateById: (veiculoId: number, veiculoModel: IVeiculoModel) => Promise<IVeiculoModel>
}
