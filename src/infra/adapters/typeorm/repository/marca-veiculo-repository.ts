import { IDbFindMarcasVeiculo, IDbFindMarcaVeiculoById } from '@/data/protocols/marca-veiculo/db-find-marca-veiculo'
import { IMarcaVeiculoModel } from '@/domain/models/marca-veiculo/marca-veiculo-model'
import { MarcaVeiculo } from '@/infra/adapters/typeorm//entities/marca-veiculo'
import { marcasVeiculoMapToModel, marcaVeiculoMapToModel } from '@/infra/adapters/typeorm/mappers/marca-veiculo-mapper'
import { getRepository, Repository } from 'typeorm'

export class CorRepository implements IDbFindMarcasVeiculo, IDbFindMarcaVeiculoById {
  private getMarcaVeiculoRepo (): Repository<MarcaVeiculo> {
    return getRepository(MarcaVeiculo)
  }

  async findAll (): Promise<IMarcaVeiculoModel[]> {
    const result = await this.getMarcaVeiculoRepo().find()
    return result ? marcasVeiculoMapToModel(result) : null
  }

  async findById (marcaVeiculoId: number): Promise<IMarcaVeiculoModel> {
    const result = await this.getMarcaVeiculoRepo().findOne({ codigoMarcaVeiculo: marcaVeiculoId })
    return result ? marcaVeiculoMapToModel(result) : null
  }
}
