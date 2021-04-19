import { IFindMarcasVeiculo } from '@/domain/protocols/marca-veiculo/find-marca-veiculo'
import ErrorHandler from '@/presentation/http/error-handler'
import { ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class GetMarcaVeiculoController implements IController {
  constructor (
    private readonly findMarcasVeiculo: IFindMarcasVeiculo
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const result = await this.findMarcasVeiculo.findAll()
    return ok(result)
  }
}
