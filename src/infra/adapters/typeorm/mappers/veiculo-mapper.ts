import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'
import { Veiculo } from '@/infra/adapters/typeorm/entities/veiculo'
import { corMapToEntity, corMapToModel } from './cor-mapper'
import { marcaVeiculoMapToEntity, marcaVeiculoMapToModel } from './marca-veiculo-mapper'

export const veiculoMapToModel = (entity: Veiculo): IVeiculoModel => {
  const model: IVeiculoModel = {
    veiculoId: entity.codigoVeiculo,
    placa: entity.placa,
    marca: entity.marcaVeiculo ? marcaVeiculoMapToModel(entity.marcaVeiculo) : null,
    cor: entity.cor ? corMapToModel(entity.cor) : null,
    inseridoEm: entity.inseridoEm
  }
  return model
}

export const veiculosMapToModel = (arrayEntity: Veiculo[]): IVeiculoModel[] => {
  const arrayModel: IVeiculoModel[] = []
  for (const item of arrayEntity) {
    arrayModel.push(veiculoMapToModel(item))
  }
  return arrayModel
}

export const veiculoMapToEntity = (model: IVeiculoModel): Veiculo => {
  const entity: Veiculo = new Veiculo()
  entity.codigoVeiculo = model.veiculoId
  entity.placa = model.placa
  entity.marcaVeiculo = model.marca ? marcaVeiculoMapToEntity(model.marca) : null
  entity.cor = model.cor ? corMapToEntity(model.cor) : null
  entity.inseridoEm = model.inseridoEm
  return entity
}

export const veiculosMapToEntity = (arrayModel: IVeiculoModel[]): Veiculo[] => {
  const arrayEntity: Veiculo[] = []
  for (const item of arrayModel) {
    arrayEntity.push(veiculoMapToEntity(item))
  }
  return arrayEntity
}
