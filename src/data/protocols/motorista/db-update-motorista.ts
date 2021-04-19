import { IMotoristaModel } from '@/domain/models/motorista/motorista-model'

export interface IDbUpdateMotoristaById {
  updateById: (motoristaId: number, motoristaModel: IMotoristaModel) => Promise<IMotoristaModel>
}
