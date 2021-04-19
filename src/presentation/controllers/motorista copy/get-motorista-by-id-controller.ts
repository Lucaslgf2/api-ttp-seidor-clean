import { IFindMotoristaById } from '@/domain/protocols/motorista/find-motorista'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetMotoristaByIdController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findMotoristaById: IFindMotoristaById
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate(httpRequest.pathParams)
    if (erro) {
      return badRequest(erro)
    }

    const { motoristaId } = httpRequest.pathParams

    const result = await this.findMotoristaById.findById(Number(motoristaId))
    return ok(result)
  }
}
