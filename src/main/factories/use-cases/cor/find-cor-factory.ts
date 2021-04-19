import { FindCores } from '@/data/use-cases/cor/find-cor'
import { IFindCores } from '@/domain/protocols/cor/find-cor'
import { corRepository } from '@/main/factories/repositories/cor-repository-factory'

const makeFindCores = (): IFindCores => {
  return new FindCores(corRepository)
}

export const findCores = makeFindCores()
