import { ICreateVeiculo } from '@/domain/protocols/veiculo/create-veiculo'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class PostVeiculoController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly createVeiculo: ICreateVeiculo
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const erro = this.validation.validate(httpRequest.body)
    if (erro) {
      return badRequest(erro)
    }

    const insertVeiculoModel = httpRequest.body

    const result = await this.createVeiculo.create(insertVeiculoModel)
    return ok(result)
  }
}
