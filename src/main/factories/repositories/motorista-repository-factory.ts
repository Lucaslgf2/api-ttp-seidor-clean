import { MotoristaRepository } from '@/infra/adapters/typeorm/repository/motorista-repository'

const makeMotoristaRepository = (): MotoristaRepository => {
  return new MotoristaRepository()
}

export const motoristaRepository = makeMotoristaRepository()
