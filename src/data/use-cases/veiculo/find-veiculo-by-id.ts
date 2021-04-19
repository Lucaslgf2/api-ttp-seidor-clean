import { IDbFindVeiculoById } from '@/data/protocols/veiculo/db-find-veiculo'
import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'
import { IFindVeiculoById } from '@/domain/protocols/veiculo/find-veiculos'

export class FindVeiculoById implements IFindVeiculoById {
  constructor (
    private readonly veiculoRepository: IDbFindVeiculoById
  ) {}

  async findById (veiculoId: number): Promise<IVeiculoModel> {
    // Busca o veiculo com o ID informado.
    const result = await this.veiculoRepository.findById(veiculoId)
    return result
  }
}
