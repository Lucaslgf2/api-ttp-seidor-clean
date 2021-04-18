export default {
  serverHost: process.env.WEBSITE_HOSTNAME || '127.0.0.1',
  port: process.env.PORT || 9001,
  databaseEnv: process.env.DATABASE_ENV || 'dev',

  jwtSecrets: {
    secretDefault: '7b6cfd949900aaabde4c60d48878677d', // MD5(UnidasB2B@2021) 12h
    secretResetPassword: 'af1ef300ff943a11c18b5e14497c01fd', // MD5(UnidasB2B#2021) 1h
    secretBeforeLogin: 'cd81a7ce9327b979a57448d4add0fc3c' // MD5(UnidasB2B$2021) 0h
  }

}
