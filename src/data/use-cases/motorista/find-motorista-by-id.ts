import { IDbFindMotoristaById } from '@/data/protocols/motorista/db-find-motorista'
import { IMotoristaModel } from '@/domain/models/motorista/motorista-model'
import { IFindMotoristaById } from '@/domain/protocols/motorista/find-motorista'

export class FindMotoristaById implements IFindMotoristaById {
  constructor (
    private readonly motoristaRepository: IDbFindMotoristaById
  ) {}

  async findById (motoristaId: number): Promise<IMotoristaModel> {
    // Busca o motorista com o ID informado.
    const result = await this.motoristaRepository.findById(motoristaId)
    return result
  }
}
