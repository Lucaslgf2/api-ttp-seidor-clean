import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { createMotorista } from '@/main/factories/use-cases/motorista/create-motorista-factory'
import { PostMotoristaController } from '@/presentation/controllers/motorista/post-motorista-controller'
import { IController } from '@/presentation/protocols'
import { postMotoristaValidation } from './validations/post-motorista-validation-factory'

const makePostMotoristaController = (): IController => {
  return new PostMotoristaController(postMotoristaValidation, createMotorista)
}

export const postMotoristaController = adaptRoute(makePostMotoristaController())
