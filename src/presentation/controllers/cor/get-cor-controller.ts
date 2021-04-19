import { IFindCores } from '@/domain/protocols/cor/find-cor'
import ErrorHandler from '@/presentation/http/error-handler'
import { ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class GetCorController implements IController {
  constructor (
    private readonly findCores: IFindCores
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const result = await this.findCores.findAll()
    return ok(result)
  }
}
