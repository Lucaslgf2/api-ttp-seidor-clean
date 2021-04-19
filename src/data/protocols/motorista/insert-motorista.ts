import { IMotoristaModel } from '@/domain/models/motorista/motorista-model'

export interface IDbInsertMotorista {
  insert: (motoristaModel: IMotoristaModel) => Promise<IMotoristaModel>
}
