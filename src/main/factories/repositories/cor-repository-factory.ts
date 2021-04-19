import { CorRepository } from '@/infra/adapters/typeorm/repository/cor-repository'

const makeCorRepository = (): CorRepository => {
  return new CorRepository()
}

export const corRepository = makeCorRepository()
