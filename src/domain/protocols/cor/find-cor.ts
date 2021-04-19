import { ICorModel } from '@/domain/models/cor/cor-model'

export interface IFindCores {
  findAll: () => Promise<ICorModel[]>
}
