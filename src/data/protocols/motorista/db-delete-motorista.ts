export interface IDbDeleteMotoristaById {
  deleteById: (motoristaId: number) => Promise<boolean>
}
