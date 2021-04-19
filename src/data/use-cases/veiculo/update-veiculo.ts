import { IDbFindCorById } from '@/data/protocols/cor/db-find-cor'
import { IDbFindMarcaVeiculoById } from '@/data/protocols/marca-veiculo/db-find-marca-veiculo'
import { IDbFindVeiculoById } from '@/data/protocols/veiculo/db-find-veiculo'
import { IDbUpdateVeiculoById } from '@/data/protocols/veiculo/db-update-veiculo'
import { GenericBussinessError } from '@/domain/bussiness-errors/generic-bussiness-error'
import { IInsertVeiculoModel, IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'
import { IUpdateVeiculo } from '@/domain/protocols/veiculo/update-veiculo'

export class UpdateVeiculo implements IUpdateVeiculo {
  constructor (
    private readonly corRepository: IDbFindCorById,
    private readonly marcaVeiculoRepository: IDbFindMarcaVeiculoById,
    private readonly veiculoRepository: IDbFindVeiculoById & IDbUpdateVeiculoById
  ) {}

  async update (veiculoId: number, insertVeiculoModel: IInsertVeiculoModel): Promise<IVeiculoModel> {
    // Verifica se o ID da Cor informado existe no banco de dados.
    const corExists = await this.corRepository.findById(insertVeiculoModel.corId)
    if (!corExists) {
      throw new GenericBussinessError('O ID da Cor informada não existe no Banco de Dados.')
    }

    // Verifica se o ID da MarcaVeiculo informado existe no banco de dados.
    const marcaVeiculoExists = await this.marcaVeiculoRepository.findById(insertVeiculoModel.marcaId)
    if (!marcaVeiculoExists) {
      throw new GenericBussinessError('O ID da Marca do Veiculo informado não existe no Banco de Dados.')
    }

    // Verifica se o ID informado existe no banco de dados.
    const veiculoExists = await this.veiculoRepository.findById(veiculoId)
    if (!veiculoExists) {
      throw new GenericBussinessError('Não foi localizado um Veiculo com o ID informado.')
    }

    // Monta o model e atualiza o veiculo com o ID informado no banco de dados.
    const veiculoModel: IVeiculoModel = {
      veiculoId: veiculoId,
      placa: insertVeiculoModel.placa,
      marca: marcaVeiculoExists,
      cor: corExists
    }
    await this.veiculoRepository.updateById(veiculoId, veiculoModel)
    return null
  }
}
