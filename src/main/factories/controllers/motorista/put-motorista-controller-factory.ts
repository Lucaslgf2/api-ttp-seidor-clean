import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { PutMotoristaController } from '@/presentation/controllers/motorista/put-motorista-controller'
import { IController } from '@/presentation/protocols'
import { updateMotorista } from '../../use-cases/motorista/update-motorista-factory'
import { putMotoristaValidation } from './validations/put-motorista-validation-factory'

const makePutMotoristaController = (): IController => {
  return new PutMotoristaController(putMotoristaValidation, updateMotorista)
}

export const putMotoristaController = adaptRoute(makePutMotoristaController())
