import { IFindVeiculoById } from '@/domain/protocols/veiculo/find-veiculo'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetVeiculoByIdController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findVeiculoById: IFindVeiculoById
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate(httpRequest.pathParams)
    if (erro) {
      return badRequest(erro)
    }

    const { veiculoId } = httpRequest.pathParams

    const result = await this.findVeiculoById.findById(Number(veiculoId))
    return ok(result)
  }
}
