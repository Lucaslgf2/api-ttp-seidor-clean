import { IRemoveMotorista } from '@/domain/protocols/motorista/remove-motorista'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class DeleteMotoristaController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly removeMotorista: IRemoveMotorista
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate(httpRequest.pathParams)
    if (erro) {
      return badRequest(erro)
    }

    const { motoristaId } = httpRequest.pathParams

    const result = await this.removeMotorista.remove(Number(motoristaId))
    return ok(result)
  }
}
