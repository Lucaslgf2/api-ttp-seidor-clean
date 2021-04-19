import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'

export interface IDbFindVeiculos {
  findAll: () => Promise<IVeiculoModel[]>
}

export interface IDbFindVeiculoById {
  findById: (veiculoId: number) => Promise<IVeiculoModel>
}
