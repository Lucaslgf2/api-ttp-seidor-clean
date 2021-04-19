import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'

export interface IFindVeiculos {
  findAll: (placa?: string, corId?: number, marcaVeiculoId?: number) => Promise<IVeiculoModel[]>
}

export interface IFindVeiculoById {
  findById: (veiculoId: number) => Promise<IVeiculoModel>
}
