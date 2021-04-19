import { IDbFindMotoristas } from '@/data/protocols/motorista/db-find-motorista'
import { IDbInsertMotorista } from '@/data/protocols/motorista/db-insert-motorista'
import { GenericBussinessError } from '@/domain/bussiness-errors/generic-bussiness-error'
import { IInsertMotoristaModel, IMotoristaModel } from '@/domain/models/motorista/motorista-model'
import { ICreateMotorista } from '@/domain/protocols/motorista/create-motorista'

export class CreateMotorista implements ICreateMotorista {
  constructor (
    private readonly motoristaRepository: IDbFindMotoristas & IDbInsertMotorista
  ) {}

  async create (insertMotoristaModel: IInsertMotoristaModel): Promise<IMotoristaModel> {
    // Verifica se o CPF informado já existe no banco de dados.
    const motoristaExists = await this.motoristaRepository.findAll(insertMotoristaModel.cpf, null)
    if (!motoristaExists) {
      throw new GenericBussinessError('Já existe um Motorista cadastrado com o CPF informado.')
    }

    // Monta o model e insere o motorista no banco de dados.
    const motoristaModel: IMotoristaModel = {
      nomeMotorista: insertMotoristaModel.nomeMotorista,
      cpf: insertMotoristaModel.cpf
    }
    const result = await this.motoristaRepository.insert(motoristaModel)
    return result
  }
}
