import { IDecrypterToken } from '@/data/protocols/criptography/decrypter-token'
import { BussinessError } from '@/domain/bussiness-errors/bussiness-error'
import { serverError, unauthorized } from '@/presentation/http/http-status'
import { IHttpRequest, IHttpResponse, IMiddleware, IValidation } from '@/presentation/protocols'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly validation: IValidation,
    private readonly decrypterToken: IDecrypterToken
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.headers)
      if (error) {
        return unauthorized()
      }

      const { authorization } = httpRequest.headers
      const bearer = authorization.split(' ')
      const bearerToken = bearer[1]

      const userAuth = await this.decrypterToken.verifyToken(bearerToken)
      if (userAuth) {
        return {
          statusCode: 200,
          body: { userAuth }
        }
      }

      return unauthorized()
    } catch (error) {
      if (error instanceof BussinessError) {
        return unauthorized(error)
      }
      return serverError(error)
    }
  }
}
