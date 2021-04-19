import { adaptMiddleware } from '@/main/adapters/express/express-middleware-adapter'
import { jwtAdapter } from '@/main/factories/adapters/jwt-adapter-factory'
import { AuthMiddleware } from '@/presentation/middlewares/auth-middleware'
import { IMiddleware } from '@/presentation/protocols'
import { makeAuthMiddlewareValidation } from './auth-middleware-validation-factory'

const makeAuthMiddlewareDefault = (): IMiddleware => {
  return new AuthMiddleware(makeAuthMiddlewareValidation(), jwtAdapter)
}

export const authMiddlewareDefault = adaptMiddleware(makeAuthMiddlewareDefault())
