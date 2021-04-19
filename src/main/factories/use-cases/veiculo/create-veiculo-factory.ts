import { CreateVeiculo } from '@/data/use-cases/veiculo/create-veiculo'
import { ICreateVeiculo } from '@/domain/protocols/veiculo/create-veiculo'
import { corRepository } from '@/main/factories/repositories/cor-repository-factory'
import { marcaVeiculoRepository } from '@/main/factories/repositories/marca-veiculo-repository-factory'
import { veiculoRepository } from '@/main/factories/repositories/veiculo-repository-factory'

const makeCreateVeiculo = (): ICreateVeiculo => {
  return new CreateVeiculo(corRepository, marcaVeiculoRepository, veiculoRepository)
}

export const createVeiculo = makeCreateVeiculo()
