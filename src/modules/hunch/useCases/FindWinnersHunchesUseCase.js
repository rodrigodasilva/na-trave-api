import { HunchService } from '../HunchService.js'

const hunchService = new HunchService()

export class FindWinnersHunchesUseCase {
	async execute({ matchId }) {

    const winners = await hunchService.findWinners(matchId)

    return winners
	}
}