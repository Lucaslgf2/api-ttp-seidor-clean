import { IInsertMotoristaModel, IMotoristaModel } from '@/domain/models/motorista/motorista-model'

export interface IUpdateMotorista {
  update: (motoristaId: number, insertMotoristaModel: IInsertMotoristaModel) => Promise<IMotoristaModel>
}
