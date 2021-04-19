export default {
  serverHost: process.env.WEBSITE_HOSTNAME || '127.0.0.1',
  port: process.env.PORT || 9001,
  databaseEnv: process.env.DATABASE_ENV || 'dev',

  jwtSecrets: {
    secretDefault: 'secret@2021'
  }

}
