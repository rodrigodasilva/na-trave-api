import { BaseError } from './baseError.js'

export class AuthenticationError extends BaseError {
    constructor() {
        super(404, 'Email e/ou senha incorretos')
    }
}