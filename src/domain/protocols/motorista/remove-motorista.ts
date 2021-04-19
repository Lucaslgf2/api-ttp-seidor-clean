export interface IRemoveMotorista {
  remove: (motoristaId: number) => Promise<boolean>
}
