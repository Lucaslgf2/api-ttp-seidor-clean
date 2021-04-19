import { IMotoristaModel } from '@/domain/models/motorista/motorista-model'

export interface IFindMotoristas {
  findAll: (cpf?: string, nome?: string) => Promise<IMotoristaModel[]>
}

export interface IFindMotoristaById {
  findById: (motoristaId: number) => Promise<IMotoristaModel>
}
