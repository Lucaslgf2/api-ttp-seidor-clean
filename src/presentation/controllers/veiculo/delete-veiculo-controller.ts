import { IRemoveVeiculo } from '@/domain/protocols/veiculo/remove-veiculo'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class DeleteVeiculoController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly removeVeiculo: IRemoveVeiculo
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate(httpRequest.pathParams)
    if (erro) {
      return badRequest(erro)
    }

    const { veiculoId } = httpRequest.pathParams

    const result = await this.removeVeiculo.remove(Number(veiculoId))
    return ok(result)
  }
}
