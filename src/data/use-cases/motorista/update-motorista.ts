import { IDbFindMotoristaById } from '@/data/protocols/motorista/db-find-motorista'
import { IDbUpdateMotoristaById } from '@/data/protocols/motorista/db-update-motorista'
import { GenericBussinessError } from '@/domain/bussiness-errors/generic-bussiness-error'
import { IInsertMotoristaModel, IMotoristaModel } from '@/domain/models/motorista/motorista-model'
import { IUpdateMotorista } from '@/domain/protocols/motorista/update-motorista'

export class UpdateMotorista implements IUpdateMotorista {
  constructor (
    private readonly motoristaRepository: IDbFindMotoristaById & IDbUpdateMotoristaById
  ) {}

  async update (motoristaId: number, insertMotoristaModel: IInsertMotoristaModel): Promise<IMotoristaModel> {
    // Verifica se o ID informado existe no banco de dados.
    const motoristaExists = await this.motoristaRepository.findById(motoristaId)
    if (!motoristaExists) {
      throw new GenericBussinessError('Não foi localizado um Motorista com o ID informado.')
    }

    // Monta o model e atualiza o motorista com o ID informado no banco de dados.
    const motoristaModel: IMotoristaModel = {
      motoristaId: motoristaId,
      nomeMotorista: insertMotoristaModel.nomeMotorista,
      cpf: insertMotoristaModel.cpf
    }
    await this.motoristaRepository.updateById(motoristaId, motoristaModel)
    return null
  }
}
