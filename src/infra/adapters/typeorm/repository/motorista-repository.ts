import { IDbDeleteMotoristaById } from '@/data/protocols/motorista/delete-motorista'
import { IDbFindMotoristaById, IDbFindMotoristas } from '@/data/protocols/motorista/find-motorista'
import { IDbInsertMotorista } from '@/data/protocols/motorista/insert-motorista'
import { IDbUpdateMotoristaById } from '@/data/protocols/motorista/update-motorista'
import { IMotoristaModel } from '@/domain/models/motorista/motorista-model'
import { Motorista } from '@/infra/adapters/typeorm/entities/motorista'
import { motoristaMapToEntity, motoristaMapToModel, motoristasMapToModel } from '@/infra/adapters/typeorm/mappers/motorista-mapper'
import { getRepository, Repository } from 'typeorm'

export class MotoristaRepository implements IDbFindMotoristas, IDbFindMotoristaById, IDbInsertMotorista, IDbUpdateMotoristaById, IDbDeleteMotoristaById {
  private getMotoristaRepo (): Repository<Motorista> {
    return getRepository(Motorista)
  }

  async findAll (): Promise<IMotoristaModel[]> {
    const result = await this.getMotoristaRepo().find()
    return result ? motoristasMapToModel(result) : null
  }

  async findById (motoristaId: number): Promise<IMotoristaModel> {
    const result = await this.getMotoristaRepo().findOne({ codigoMotorista: motoristaId })
    return result ? motoristaMapToModel(result) : null
  }

  async insert (motoristaModel: IMotoristaModel): Promise<IMotoristaModel> {
    const motoristaEntity = motoristaMapToEntity(motoristaModel)
    await this.getMotoristaRepo().save(motoristaEntity)
    return motoristaMapToModel(motoristaEntity)
  }

  async updateById (motoristaId: number, motoristaModel: IMotoristaModel): Promise<IMotoristaModel> {
    const motoristaEntity = motoristaMapToEntity(motoristaModel)
    await this.getMotoristaRepo().update(motoristaId, motoristaEntity)
    return motoristaMapToModel(motoristaEntity)
  }

  async deleteById (motoristaId: number): Promise<boolean> {
    const result = await this.getMotoristaRepo().delete({ codigoMotorista: motoristaId })
    return !!result
  }
}
