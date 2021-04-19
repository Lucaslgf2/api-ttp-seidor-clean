import { IUtilizacaoVeiculoModel } from '@/domain/models/utilizacao-veiculo/utilizacao-veiculo-model'
import { UtilizacaoVeiculo } from '@/infra/adapters/typeorm/entities/utilizacao-veiculo'
import { motoristaMapToEntity, motoristaMapToModel } from './motorista-mapper'
import { veiculoMapToEntity, veiculoMapToModel } from './veiculo-mapper'

export const utilizacaoVeiculoMapToModel = (entity: UtilizacaoVeiculo): IUtilizacaoVeiculoModel => {
  const model: IUtilizacaoVeiculoModel = {
    utilizacaoVeiculoId: entity.codigoUtilizacaoVeiculo,
    veiculo: entity.veiculo ? veiculoMapToModel(entity.veiculo) : null,
    motorista: entity.motorista ? motoristaMapToModel(entity.motorista) : null,
    dataInicio: entity.dataInicio,
    dataTermino: entity.dataTermino,
    motivoUtilizacao: entity.motivoUtilizacao,
    inseridoEm: entity.inseridoEm
  }
  return model
}

export const utilizacaoVeiculosMapToModel = (arrayEntity: UtilizacaoVeiculo[]): IUtilizacaoVeiculoModel[] => {
  const arrayModel: IUtilizacaoVeiculoModel[] = []
  for (const item of arrayEntity) {
    arrayModel.push(utilizacaoVeiculoMapToModel(item))
  }
  return arrayModel
}

export const utilizacaoVeiculoMapToEntity = (model: IUtilizacaoVeiculoModel): UtilizacaoVeiculo => {
  const entity: UtilizacaoVeiculo = new UtilizacaoVeiculo()
  entity.codigoUtilizacaoVeiculo = model.utilizacaoVeiculoId
  entity.veiculo = model.veiculo ? veiculoMapToEntity(model.veiculo) : null
  entity.motorista = model.motorista ? motoristaMapToEntity(model.motorista) : null
  entity.dataInicio = model.dataInicio
  entity.dataTermino = model.dataTermino
  entity.motivoUtilizacao = model.motivoUtilizacao
  entity.inseridoEm = model.inseridoEm
  return entity
}

export const utilizacaoVeiculosMapToEntity = (arrayModel: IUtilizacaoVeiculoModel[]): UtilizacaoVeiculo[] => {
  const arrayEntity: UtilizacaoVeiculo[] = []
  for (const item of arrayModel) {
    arrayEntity.push(utilizacaoVeiculoMapToEntity(item))
  }
  return arrayEntity
}
