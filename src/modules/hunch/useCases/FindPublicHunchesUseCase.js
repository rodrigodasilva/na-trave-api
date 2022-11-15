import { HunchService } from '../HunchService.js'

const hunchService = new HunchService()

export class FindPublicHunchesUseCase {
	async execute({ matchId }) {

		const hunches = await hunchService.findPublic(matchId)

		return hunches
	}
}