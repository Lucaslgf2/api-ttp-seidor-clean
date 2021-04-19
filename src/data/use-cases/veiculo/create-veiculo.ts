import { IDbFindCorById } from '@/data/protocols/cor/db-find-cor'
import { IDbFindMarcaVeiculoById } from '@/data/protocols/marca-veiculo/db-find-marca-veiculo'
import { IDbFindVeiculos } from '@/data/protocols/veiculo/db-find-veiculo'
import { IDbInsertVeiculo } from '@/data/protocols/veiculo/db-insert-veiculo'
import { GenericBussinessError } from '@/domain/bussiness-errors/generic-bussiness-error'
import { IInsertVeiculoModel, IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'
import { ICreateVeiculo } from '@/domain/protocols/veiculo/create-veiculo'

export class CreateVeiculo implements ICreateVeiculo {
  constructor (
    private readonly corRepository: IDbFindCorById,
    private readonly marcaVeiculoRepository: IDbFindMarcaVeiculoById,
    private readonly veiculoRepository: IDbFindVeiculos & IDbInsertVeiculo
  ) {}

  async create (insertVeiculoModel: IInsertVeiculoModel): Promise<IVeiculoModel> {
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

    // Verifica se a Placa informada já existe no banco de dados.
    const veiculoExists = await this.veiculoRepository.findAll(insertVeiculoModel.placa, null, null)
    if (!veiculoExists) {
      throw new GenericBussinessError('Já existe um Veiculo cadastrado com a Placa informada.')
    }

    // Monta o model e insere o veiculo no banco de dados.
    const veiculoModel: IVeiculoModel = {
      placa: insertVeiculoModel.placa,
      marca: marcaVeiculoExists,
      cor: corExists
    }
    const result = await this.veiculoRepository.insert(veiculoModel)
    return result
  }
}
