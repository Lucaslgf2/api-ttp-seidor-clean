import { IMarcaVeiculoModel } from '@/domain/models/marca-veiculo/marca-veiculo-model'

export interface IDbFindMarcasVeiculo {
  findAll: () => Promise<IMarcaVeiculoModel[]>
}

export interface IDbFindMarcaVeiculoById {
  findById: (marcaVeiculoId: number) => Promise<IMarcaVeiculoModel>
}
