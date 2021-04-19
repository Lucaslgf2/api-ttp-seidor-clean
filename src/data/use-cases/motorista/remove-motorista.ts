import { IDbDeleteMotoristaById } from '@/data/protocols/motorista/db-delete-motorista'
import { IDbFindMotoristaById } from '@/data/protocols/motorista/db-find-motorista'
import { GenericBussinessError } from '@/domain/bussiness-errors/generic-bussiness-error'
import { IRemoveMotorista } from '@/domain/protocols/motorista/remove-motorista'

export class RemoveMotorista implements IRemoveMotorista {
  constructor (
    private readonly motoristaRepository: IDbFindMotoristaById & IDbDeleteMotoristaById
  ) {}

  async remove (motoristaId: number): Promise<boolean> {
    // Verifica se o ID informado existe no banco de dados.
    const motoristaExists = await this.motoristaRepository.findById(motoristaId)
    if (!motoristaExists) {
      throw new GenericBussinessError('Não foi localizado um Motorista com o ID informado.')
    }

    // Deleta o motorista com o ID informado no banco de dados.
    const result = await this.motoristaRepository.deleteById(motoristaId)
    return result
  }
}
