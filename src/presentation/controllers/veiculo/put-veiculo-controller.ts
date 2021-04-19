import { IUpdateVeiculo } from '@/domain/protocols/veiculo/update-veiculo'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class PutVeiculoController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly updateVeiculo: IUpdateVeiculo
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate({ ...httpRequest.pathParams, ...httpRequest.body })
    if (erro) {
      return badRequest(erro)
    }

    const { veiculoId } = httpRequest.pathParams
    const updateVeiculoModel = httpRequest.body

    const result = await this.updateVeiculo.update(Number(veiculoId), updateVeiculoModel)
    return ok(result)
  }
}
