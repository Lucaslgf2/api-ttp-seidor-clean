import { ICorModel } from '@/domain/models/cor/cor-model'

export interface IDbFindCores {
  findAll: () => Promise<ICorModel[]>
}

export interface IDbFindCorById {
  findById: (corId: number) => Promise<ICorModel>
}
