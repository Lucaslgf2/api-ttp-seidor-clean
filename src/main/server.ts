import 'module-alias/register' // Permite usar o alias @
import server from './config/app'
import env from './config/env'

/*
TypeOrmHelper.createConnection(env.databaseEnv)
  .then(() => {
    server.listen(env.port, () => {
      console.log(`Enviroment: ${env.databaseEnv.toUpperCase()}`)
      console.log(`Server rodando em http://${env.serverHost}:${env.port}`)
    })
    Jobs.initJobs()
      .then(() => { console.log('Jobs Iniciados..') })
      .catch(console.error)
  })
  .catch(console.error)
*/

server.listen(env.port, () => {
  console.log(`Enviroment: ${env.databaseEnv.toUpperCase()}`)
  console.log(`Server rodando em http://${env.serverHost}:${env.port}`)
})
