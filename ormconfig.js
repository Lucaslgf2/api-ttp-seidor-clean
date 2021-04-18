module.exports = [
  {
    name: 'dev',
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    synchronize: true,
    connectionTimeout: 25000,
    requestTimeout: 60000,
    options: {
      enableArithAbort: true
    },
    logging: false,
    entities: ['dist/infra/adapters/typeorm/entities/*.js'],
    migrations: ['dist/infra/adapters/typeorm/migrations/*.js'],
    cli: {
      migrationsDir: 'src/infra/adapters/typeorm/migrations',
      entitiesDir: 'src/infra/adapters/typeorm/entities'
    }
  },
  {
    name: 'test',
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    synchronize: true,
    logging: true,
    entities: ['src/infra/adapters/typeorm/entities/*.ts'],
    cli: {
      entitiesDir: 'src/infra/adapters/typeorm/entities'
    }
  }
]
