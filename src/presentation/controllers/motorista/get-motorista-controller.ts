import { IFindMotoristas } from '@/domain/protocols/motorista/find-motorista'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetMotoristaController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findMotoristas: IFindMotoristas
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate(httpRequest.queryParams)
    if (erro) {
      return badRequest(erro)
    }

    const cpf = httpRequest.queryParams
    const nome = httpRequest.queryParams

    const result = await this.findMotoristas.findAll(cpf, nome)
    return ok(result)
  }
}
