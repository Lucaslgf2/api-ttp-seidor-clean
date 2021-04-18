import { BussinessError } from '@/domain/bussiness-errors/bussiness-error'
import { ServerError } from '@/presentation/errors/'
import { badRequest, serverError } from '@/presentation/http/http-status'

export default function ErrorHandler (): any {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    descriptor.value = async function (...args: any[]) {
      try {
        return await fn.apply(this, args)
      } catch (error) {
        if (error instanceof BussinessError) {
          return badRequest(error)
        }
        const error500 = makeServerError(error)
        return serverError(error500)
      }
    }
  }
}

function makeServerError (error: any): ServerError {
  const sqlErr = error.query ? error.query : null
  const sqlParams = error.parameters ? JSON.stringify(error.parameters) : null
  const dbError = (sqlErr || sqlParams) ? `Query: ${sqlErr} \n\n Parameters: ${sqlParams}` : null
  return new ServerError(error.stack, dbError)
}
