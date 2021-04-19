export interface IDbDeleteVeiculoById {
  deleteById: (veiculoId: number) => Promise<boolean>
}
