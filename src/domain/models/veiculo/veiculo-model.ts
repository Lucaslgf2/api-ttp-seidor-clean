import { ICorModel } from '@/domain/models/cor/cor-model'
import { IMarcaVeiculoModel } from '@/domain/models/marca-veiculo/marca-veiculo-model'

export interface IVeiculoModel {
  veiculoId?: number
  placa: string
  marca: IMarcaVeiculoModel
  cor: ICorModel
  inseridoEm?: Date
}

export interface IInsertVeiculoModel extends Omit<IVeiculoModel, 'marca' | 'cor'> {
  marcaId: number
  corId: number
}
