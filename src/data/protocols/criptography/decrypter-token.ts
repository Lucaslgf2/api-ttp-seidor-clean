export interface IDecrypterToken {
  verifyToken: (cipherText: string) => Promise<object | string>
}
