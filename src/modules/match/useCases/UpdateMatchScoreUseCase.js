
import { client } from '../../../database/prismaClient.js'
import { HunchService } from '../../hunch/HunchService.js'
import { MatchService } from '../MatchService.js'

const matchService = new MatchService()
const hunchService = new HunchService()

export class UpdateMatchScoreUseCase {
	async execute({ id, homeTeamScore, awayTeamScore }) {

    const result = await client.$transaction([
      matchService.updateMatchScores(id, homeTeamScore, awayTeamScore),
      hunchService.updateWon(id, homeTeamScore, awayTeamScore),
      hunchService.updateLoses(id, homeTeamScore, awayTeamScore),
    ])

    
    return result
	}
}


