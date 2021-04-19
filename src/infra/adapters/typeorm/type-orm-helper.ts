import { Connection, createConnection, getConnectionOptions } from 'typeorm'

export const TypeOrmHelper = {
  connection: null as Connection,

  async createConnection (env: string): Promise<Connection> {
    const connectionOptions = await getConnectionOptions(env)
    this.connection = await createConnection({ ...connectionOptions, name: 'default' })
    return this.connection
  },

  async closeConnection (): Promise<void> {
    await this.connection.close()
    this.connection = null
  }
}
