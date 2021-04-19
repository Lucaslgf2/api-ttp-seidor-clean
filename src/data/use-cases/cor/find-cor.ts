import { IDbFindCores } from '@/data/protocols/cor/db-find-cor'
import { ICorModel } from '@/domain/models/cor/cor-model'
import { IFindCores } from '@/domain/protocols/cor/find-cor'

export class FindCores implements IFindCores {
  constructor (
    private readonly corRepository: IDbFindCores
  ) { }

  async findAll (): Promise<ICorModel[]> {
    const result = await this.corRepository.findAll()
    return result
  }
}
