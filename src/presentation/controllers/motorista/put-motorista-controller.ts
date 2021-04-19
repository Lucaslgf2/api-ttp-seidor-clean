import { IUpdateMotorista } from '@/domain/protocols/motorista/update-motorista'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class PutMotoristaController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly updateMotorista: IUpdateMotorista
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate({ ...httpRequest.pathParams, ...httpRequest.body })
    if (erro) {
      return badRequest(erro)
    }

    const { motoristaId } = httpRequest.pathParams
    const updateMotoristaModel = httpRequest.body

    const result = await this.updateMotorista.update(Number(motoristaId), updateMotoristaModel)
    return ok(result)
  }
}
