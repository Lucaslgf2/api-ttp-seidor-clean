import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { findCores } from '@/main/factories/use-cases/cor/find-cor-factory'
import { GetCorController } from '@/presentation/controllers/cor/get-cor-controller'
import { IController } from '@/presentation/protocols'

const makeGetCorController = (): IController => {
  return new GetCorController(findCores)
}

export const getCorController = adaptRoute(makeGetCorController())
