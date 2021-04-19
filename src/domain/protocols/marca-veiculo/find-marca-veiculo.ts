import { IMarcaVeiculoModel } from '@/domain/models/marca-veiculo/marca-veiculo-model'

export interface IFindMarcasVeiculo {
  findAll: () => Promise<IMarcaVeiculoModel[]>
}
