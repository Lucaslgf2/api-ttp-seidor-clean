import { ICorModel } from '@/domain/models/cor/cor-model'
import { Cor } from '@/infra/adapters/typeorm/entities/cor'

export const corMapToModel = (entity: Cor): ICorModel => {
  const model: ICorModel = {
    corId: entity.codigoCor,
    nomeCor: entity.nomeCor,
    hex: entity.codigoHexadecimal,
    inseridoEm: entity.inseridoEm
  }
  return model
}

export const coresMapToModel = (arrayEntity: Cor[]): ICorModel[] => {
  const arrayModel: ICorModel[] = []
  for (const item of arrayEntity) {
    arrayModel.push(corMapToModel(item))
  }
  return arrayModel
}

export const corMapToEntity = (model: ICorModel): Cor => {
  const entity: Cor = new Cor()
  entity.codigoCor = model.corId
  entity.nomeCor = model.nomeCor
  entity.codigoHexadecimal = model.hex
  entity.inseridoEm = model.inseridoEm
  return entity
}

export const coresMapToEntity = (arrayModel: ICorModel[]): Cor[] => {
  const arrayEntity: Cor[] = []
  for (const item of arrayModel) {
    arrayEntity.push(corMapToEntity(item))
  }
  return arrayEntity
}
