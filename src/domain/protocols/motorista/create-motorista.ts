import { IInsertMotoristaModel, IMotoristaModel } from '@/domain/models/motorista/motorista-model'

export interface ICreateMotorista {
  create: (insertMotoristaModel: IInsertMotoristaModel) => Promise<IMotoristaModel>
}
