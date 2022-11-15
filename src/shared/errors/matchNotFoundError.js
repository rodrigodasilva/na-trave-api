import { BaseError } from './baseError.js'

export class MatchNotFoundError extends BaseError {
    constructor() {
        super(404, 'Partida não encontrada')
    }
}