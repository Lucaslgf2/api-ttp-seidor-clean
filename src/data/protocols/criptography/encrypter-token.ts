
export interface IEncrypterToken {
  signToken: (payload: string | object) => Promise<string>
}
