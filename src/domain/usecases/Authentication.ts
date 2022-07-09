import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: string
  assword: string
}
export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel> // implementar esste modulo de forma assincrona
}
