import { IDbFindUtilizacaoVeiculoById, IDbFindUtilizacaoVeiculos } from '@/data/protocols/utilizacao-veiculo/find-utilizacao-veiculo'
import { IDbInsertUtilizacaoVeiculo } from '@/data/protocols/utilizacao-veiculo/insert-utilizacao-veiculo'
import { IDbUpdateUtilizacaoVeiculoById } from '@/data/protocols/utilizacao-veiculo/update-utilizacao-veiculo'
import { IUtilizacaoVeiculoModel } from '@/domain/models/utilizacao-veiculo/utilizacao-veiculo-model'
import { UtilizacaoVeiculo } from '@/infra/adapters/typeorm/entities/utilizacao-veiculo'
import { utilizacaoVeiculoMapToEntity, utilizacaoVeiculoMapToModel, utilizacaoVeiculosMapToModel } from '@/infra/adapters/typeorm/mappers/utilizacao-mapper'
import { getRepository, Repository } from 'typeorm'

export class UtilizacaoVeiculoRepository implements IDbFindUtilizacaoVeiculos, IDbFindUtilizacaoVeiculoById, IDbInsertUtilizacaoVeiculo, IDbUpdateUtilizacaoVeiculoById {
  private getUtilizacaoVeiculoRepo (): Repository<UtilizacaoVeiculo> {
    return getRepository(UtilizacaoVeiculo)
  }

  async findAll (): Promise<IUtilizacaoVeiculoModel[]> {
    const result = await this.getUtilizacaoVeiculoRepo().find()
    return result ? utilizacaoVeiculosMapToModel(result) : null
  }

  async findById (utilizacaoVeiculoId: number): Promise<IUtilizacaoVeiculoModel> {
    const result = await this.getUtilizacaoVeiculoRepo().findOne({ codigoUtilizacaoVeiculo: utilizacaoVeiculoId })
    return result ? utilizacaoVeiculoMapToModel(result) : null
  }

  async insert (utilizacaoVeiculoModel: IUtilizacaoVeiculoModel): Promise<IUtilizacaoVeiculoModel> {
    const utilizacaoVeiculoEntity = utilizacaoVeiculoMapToEntity(utilizacaoVeiculoModel)
    await this.getUtilizacaoVeiculoRepo().save(utilizacaoVeiculoEntity)
    return utilizacaoVeiculoMapToModel(utilizacaoVeiculoEntity)
  }

  async updateById (utilizacaoVeiculoId: number, utilizacaoVeiculoModel: IUtilizacaoVeiculoModel): Promise<IUtilizacaoVeiculoModel> {
    const utilizacaoVeiculoEntity = utilizacaoVeiculoMapToEntity(utilizacaoVeiculoModel)
    await this.getUtilizacaoVeiculoRepo().update(utilizacaoVeiculoId, utilizacaoVeiculoEntity)
    return utilizacaoVeiculoMapToModel(utilizacaoVeiculoEntity)
  }
}
