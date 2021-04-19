import { IDbFindMotoristas } from '@/data/protocols/motorista/db-find-motorista'
import { IMotoristaModel } from '@/domain/models/motorista/motorista-model'
import { IFindMotoristas } from '@/domain/protocols/motorista/find-motorista'

export class FindMotoristas implements IFindMotoristas {
  constructor (
    private readonly motoristaRepository: IDbFindMotoristas
  ) {}

  async findAll (cpf?: string, nome?: string): Promise<IMotoristaModel[]> {
    // Busca o motorista com os parametros informados.
    const result = await this.motoristaRepository.findAll(cpf, nome)
    return result
  }
}
