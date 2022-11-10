
import { MatchService } from '../MatchService.js'

const matchService = new MatchService()

export class ShowMatchUseCase {
	async execute(id) {		
		const match = await matchService.findById(id)
		return match
	}
}