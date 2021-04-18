import { IDecrypterToken } from '@/data/protocols/criptography/decrypter-token'
import { IEncrypterToken } from '@/data/protocols/criptography/encrypter-token'
import { JsonWebTokenError } from '@/domain/bussiness-errors/json-web-token-error'
import { TokenExpiredError } from '@/domain/bussiness-errors/token-expired-error'
import jwt, { SignOptions } from 'jsonwebtoken'

export class JwtAdapter implements IEncrypterToken, IDecrypterToken {
  constructor (
    private readonly secret: string | Buffer,
    private readonly options?: SignOptions
  ) {}

  async signToken (payload: string | object): Promise<string> {
    const cipherText = jwt.sign(payload, this.secret, this.options)
    return cipherText
  }

  async verifyToken (cipherText: string): Promise<object | string> {
    try {
      const plainText = jwt.verify(cipherText, this.secret)
      return plainText
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new TokenExpiredError()
      }
      if (error.name === 'JsonWebTokenError') {
        throw new JsonWebTokenError()
      }
      throw error
    }
  }
}
