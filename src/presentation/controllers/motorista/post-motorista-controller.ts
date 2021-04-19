import { ICreateMotorista } from '@/domain/protocols/motorista/create-motorista'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class PostMotoristaController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly createMotorista: ICreateMotorista
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate(httpRequest.body)
    if (erro) {
      return badRequest(erro)
    }

    const insertMotoristaModel = httpRequest.body

    const result = await this.createMotorista.create(insertMotoristaModel)
    return ok(result)
  }
}
