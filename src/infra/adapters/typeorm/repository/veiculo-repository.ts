import { IDbDeleteVeiculoById } from '@/data/protocols/veiculo/db-delete-veiculo'
import { IDbFindVeiculoById, IDbFindVeiculos } from '@/data/protocols/veiculo/db-find-veiculo'
import { IDbInsertVeiculo } from '@/data/protocols/veiculo/db-insert-veiculo'
import { IDbUpdateVeiculoById } from '@/data/protocols/veiculo/db-update-veiculo'
import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'
import { Veiculo } from '@/infra/adapters/typeorm/entities/veiculo'
import { veiculoMapToEntity, veiculoMapToModel, veiculosMapToModel } from '@/infra/adapters/typeorm/mappers/veiculo-mapper'
import { getRepository, Repository } from 'typeorm'

export class VeiculoRepository implements IDbFindVeiculos, IDbFindVeiculoById, IDbInsertVeiculo, IDbUpdateVeiculoById, IDbDeleteVeiculoById {
  private getVeiculoRepo (): Repository<Veiculo> {
    return getRepository(Veiculo)
  }

  async findAll (placa?: string, corId?: number, marcaVeiculoId?: number): Promise<IVeiculoModel[]> {
    const result = await this.getVeiculoRepo().find({
      where: {
        placa: placa,
        cor: { codigoCor: corId },
        marcaVeiculo: { codigoMarcaVeiculo: marcaVeiculoId }
      }
    })
    return result ? veiculosMapToModel(result) : null
  }

  async findById (veiculoId: number): Promise<IVeiculoModel> {
    const result = await this.getVeiculoRepo().findOne({ codigoVeiculo: veiculoId })
    return result ? veiculoMapToModel(result) : null
  }

  async insert (veiculoModel: IVeiculoModel): Promise<IVeiculoModel> {
    const veiculoEntity = veiculoMapToEntity(veiculoModel)
    await this.getVeiculoRepo().save(veiculoEntity)
    return veiculoMapToModel(veiculoEntity)
  }

  async updateById (veiculoId: number, veiculoModel: IVeiculoModel): Promise<IVeiculoModel> {
    const veiculoEntity = veiculoMapToEntity(veiculoModel)
    await this.getVeiculoRepo().update(veiculoId, veiculoEntity)
    return veiculoMapToModel(veiculoEntity)
  }

  async deleteById (veiculoId: number): Promise<boolean> {
    const result = await this.getVeiculoRepo().delete({ codigoVeiculo: veiculoId })
    return !!result
  }
}
