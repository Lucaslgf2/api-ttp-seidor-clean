import { IDbFindMarcasVeiculo } from '@/data/protocols/marca-veiculo/db-find-marca-veiculo'
import { IMarcaVeiculoModel } from '@/domain/models/marca-veiculo/marca-veiculo-model'
import { IFindMarcasVeiculo } from '@/domain/protocols/marca-veiculo/find-marca-veiculo'

export class FindMarcasVeiculo implements IFindMarcasVeiculo {
  constructor (
    private readonly marcaVeiculoRepository: IDbFindMarcasVeiculo
  ) { }

  async findAll (): Promise<IMarcaVeiculoModel[]> {
    const result = await this.marcaVeiculoRepository.findAll()
    return result
  }
}
