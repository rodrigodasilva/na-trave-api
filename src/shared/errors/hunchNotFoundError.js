import { BaseError } from './baseError.js'

export class HunchNotFoundError extends BaseError {
    constructor() {
        super(404, 'Palpite não encontrado')
    }
}