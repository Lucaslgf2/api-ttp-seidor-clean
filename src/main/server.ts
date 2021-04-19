import 'module-alias/register' // permite usar o alias @
import { TypeOrmHelper } from '@/infra/adapters/typeorm/type-orm-helper'
import server from './config/app'
import env from './config/env'

console.log('Hello!')

TypeOrmHelper.createConnection(env.databaseEnv)
  .then(() => {
    server.listen(env.port, () => {
      console.log(`Enviroment: ${env.databaseEnv.toUpperCase()}`)
      console.log(`Server rodando em http://${env.serverHost}:${env.port}`)
    })
  })
  .catch(console.error)
