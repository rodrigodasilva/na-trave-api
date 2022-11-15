import { HunchService } from '../HunchService.js'

const hunchService = new HunchService()

export class FindAllHunchesUseCase {
	async execute({ matchId }) {

		const hunches = await hunchService.findAll(matchId)

		return hunches
	}
}