export interface IMotoristaModel {
  motoristaId?: number
  nomeMotorista: string
  cpf: string
  inseridoEm?: Date
}

export interface IInsertMotoristaModel extends Omit<IMotoristaModel, ''> {
  // nenhuma diferença
}
