import { IMotoristaModel } from '@/domain/models/motorista/motorista-model'
import { Motorista } from '../entities/motorista'

export const motoristaMapToModel = (entity: Motorista): IMotoristaModel => {
  const model: IMotoristaModel = {
    motoristaId: entity.codigoMotorista,
    nomeMotorista: entity.nomeMotorista,
    cpf: entity.cpf,
    inseridoEm: entity.inseridoEm
  }
  return model
}

export const motoristasMapToModel = (arrayEntity: Motorista[]): IMotoristaModel[] => {
  const arrayModel: IMotoristaModel[] = []
  for (const item of arrayEntity) {
    arrayModel.push(motoristaMapToModel(item))
  }
  return arrayModel
}

export const motoristaMapToEntity = (model: IMotoristaModel): Motorista => {
  const entity: Motorista = new Motorista()
  entity.codigoMotorista = model.motoristaId
  entity.nomeMotorista = model.nomeMotorista
  entity.cpf = model.cpf
  entity.inseridoEm = model.inseridoEm
  return entity
}

export const motoristasMapToEntity = (arrayModel: IMotoristaModel[]): Motorista[] => {
  const arrayEntity: Motorista[] = []
  for (const item of arrayModel) {
    arrayEntity.push(motoristaMapToEntity(item))
  }
  return arrayEntity
}
