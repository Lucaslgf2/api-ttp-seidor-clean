import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'

export interface IDbFindVeiculos {
  findAll: (placa?: string, corId?: number, marcaVeiculoId?: number) => Promise<IVeiculoModel[]>
}

export interface IDbFindVeiculoById {
  findById: (veiculoId: number) => Promise<IVeiculoModel>
}
