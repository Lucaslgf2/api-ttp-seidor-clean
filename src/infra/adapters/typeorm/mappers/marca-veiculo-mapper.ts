import { IMarcaVeiculoModel } from '@/domain/models/marca-veiculo/marca-veiculo-model'
import { MarcaVeiculo } from '@/infra/adapters/typeorm/entities/marca-veiculo'

export const marcaVeiculoMapToModel = (entity: MarcaVeiculo): IMarcaVeiculoModel => {
  const model: IMarcaVeiculoModel = {
    marcaVeiculoId: entity.codigoMarcaVeiculo,
    nomeMarca: entity.nomeMarca,
    logoUrl: entity.urlLogo,
    inseridoEm: entity.inseridoEm
  }
  return model
}

export const marcasVeiculoMapToModel = (arrayEntity: MarcaVeiculo[]): IMarcaVeiculoModel[] => {
  const arrayModel: IMarcaVeiculoModel[] = []
  for (const item of arrayEntity) {
    arrayModel.push(marcaVeiculoMapToModel(item))
  }
  return arrayModel
}

export const marcaVeiculoMapToEntity = (model: IMarcaVeiculoModel): MarcaVeiculo => {
  const entity: MarcaVeiculo = new MarcaVeiculo()
  entity.codigoMarcaVeiculo = model.marcaVeiculoId
  entity.nomeMarca = model.nomeMarca
  entity.urlLogo = model.logoUrl
  entity.inseridoEm = model.inseridoEm
  return entity
}

export const marcasVeiculoMapToEntity = (arrayModel: IMarcaVeiculoModel[]): MarcaVeiculo[] => {
  const arrayEntity: MarcaVeiculo[] = []
  for (const item of arrayModel) {
    arrayEntity.push(marcaVeiculoMapToEntity(item))
  }
  return arrayEntity
}
