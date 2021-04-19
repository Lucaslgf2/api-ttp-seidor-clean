import { IDbFindCorById, IDbFindCores } from '@/data/protocols/cor/find-cor'
import { ICorModel } from '@/domain/models/cor/cor-model'
import { Cor } from '@/infra/adapters/typeorm/entities/cor'
import { coresMapToModel, corMapToModel } from '@/infra/adapters/typeorm/mappers/cor-mapper'
import { getRepository, Repository } from 'typeorm'

export class CorRepository implements IDbFindCores, IDbFindCorById {
  private getCorRepo (): Repository<Cor> {
    return getRepository(Cor)
  }

  async findAll (): Promise<ICorModel[]> {
    const result = await this.getCorRepo().find()
    return result ? coresMapToModel(result) : null
  }

  async findById (corId: number): Promise<ICorModel> {
    const result = await this.getCorRepo().findOne({ codigoCor: corId })
    return result ? corMapToModel(result) : null
  }
}
