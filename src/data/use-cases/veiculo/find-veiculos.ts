import { IDbFindVeiculos } from '@/data/protocols/veiculo/db-find-veiculo'
import { IVeiculoModel } from '@/domain/models/veiculo/veiculo-model'
import { IFindVeiculos } from '@/domain/protocols/veiculo/find-veiculos'

export class FindVeiculos implements IFindVeiculos {
  constructor (
    private readonly veiculoRepository: IDbFindVeiculos
  ) {}

  async findAll (placa?: string, corId?: number, marcaVeiculoId?: number): Promise<IVeiculoModel[]> {
    // Busca o veiculo com os parametros informados.
    const result = await this.veiculoRepository.findAll(placa, corId, marcaVeiculoId)
    return result
  }
}
