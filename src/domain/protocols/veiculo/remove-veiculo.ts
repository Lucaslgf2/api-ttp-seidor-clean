export interface IRemoveVeiculo {
  remove: (veiculoId: number) => Promise<boolean>
}
