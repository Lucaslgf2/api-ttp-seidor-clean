import { IDbFindVeiculoById } from '@/data/protocols/veiculo/db-find-veiculo'
import { IDbUpdateVeiculoById } from '@/data/protocols/veiculo/db-update-veiculo'
import { GenericBussinessError } from '@/domain/bussiness-errors/generic-bussiness-error'
import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'
import { IUpdateVeiculo } from '@/domain/protocols/veiculo/update-veiculo'

export class UpdateVeiculo implements IUpdateVeiculo {
  constructor (
    private readonly veiculoRepository: IDbFindVeiculoById & IDbUpdateVeiculoById
  ) {}

  async update (veiculoId: number, veiculoModel: IVeiculoModel): Promise<IVeiculoModel> {
    // Verifica se o ID informado existe no banco de dados.
    const veiculoExists = await this.veiculoRepository.findById(veiculoId)
    if (!veiculoExists) {
      throw new GenericBussinessError('Não foi localizado um Veiculo com o ID informado.')
    }

    // Atualiza o veiculo com o ID informado no banco de dados.
    await this.veiculoRepository.updateById(veiculoId, veiculoModel)
    return null
  }
}
