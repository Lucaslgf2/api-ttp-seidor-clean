import { IMotoristaModel } from '@/domain/models/motorista/motorista-model'
import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'

export interface IUtilizacaoVeiculoModel{
  utilizacaoVeiculoId?: number
  veiculo: IVeiculoModel
  motorista: IMotoristaModel
  dataInicio: Date
  dataTermino: Date
  motivoUtilizacao: string
  inseridoEm?: Date
}
