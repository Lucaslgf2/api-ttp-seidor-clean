import { IFindVeiculos } from '@/domain/protocols/veiculo/find-veiculo'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetVeiculoController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findVeiculos: IFindVeiculos
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate(httpRequest.queryParams)
    if (erro) {
      return badRequest(erro)
    }

    const placa = httpRequest.queryParams
    const corId = httpRequest.queryParams
    const marcaVeiculoId = httpRequest.queryParams

    const result = await this.findVeiculos.findAll(placa, Number(corId), Number(marcaVeiculoId))
    return ok(result)
  }
}
