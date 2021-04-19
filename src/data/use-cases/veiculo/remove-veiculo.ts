import { IDbDeleteVeiculoById } from '@/data/protocols/veiculo/db-delete-veiculo'
import { IDbFindVeiculoById } from '@/data/protocols/veiculo/db-find-veiculo'
import { GenericBussinessError } from '@/domain/bussiness-errors/generic-bussiness-error'
import { IRemoveVeiculo } from '@/domain/protocols/veiculo/remove-veiculo'

export class RemoveVeiculo implements IRemoveVeiculo {
  constructor (
    private readonly veiculoRepository: IDbFindVeiculoById & IDbDeleteVeiculoById
  ) {}

  async remove (veiculoId: number): Promise<boolean> {
    // Verifica se o ID informado existe no banco de dados.
    const veiculoExists = await this.veiculoRepository.findById(veiculoId)
    if (!veiculoExists) {
      throw new GenericBussinessError('Não foi localizado um Veiculo com o ID informado.')
    }

    // Deleta o veiculo com o ID informado no banco de dados.
    const result = await this.veiculoRepository.deleteById(veiculoId)
    return result
  }
}
