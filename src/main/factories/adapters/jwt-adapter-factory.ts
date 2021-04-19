import { JwtAdapter } from '@/infra/adapters/jwt/jwt-adapter'
import env from '@/main/config/env'

const makeJwtAdapter = (): JwtAdapter => {
  return new JwtAdapter(env.jwtSecrets.secretDefault, { expiresIn: '12h' })
}

export const jwtAdapter = makeJwtAdapter()
