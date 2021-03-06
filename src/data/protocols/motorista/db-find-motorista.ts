import { IMotoristaModel } from '@/domain/models/motorista/motorista-model'

export interface IDbFindMotoristas {
  findAll: (cpf?: string, nome?: string) => Promise<IMotoristaModel[]>
}

export interface IDbFindMotoristaById {
  findById: (motoristaId: number) => Promise<IMotoristaModel>
}
