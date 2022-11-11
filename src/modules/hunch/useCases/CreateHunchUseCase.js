
import { HunchService } from '../HunchService.js'

const hunchService = new HunchService()

export class CreateHunchUseCase {
	async execute({
		sellerId,
		matchId, 
		homeTeamScore,
		awayTeamScore,
		contactName,
		contactPhone
	 }) {		

		const hunch = await hunchService.create({
			sellerId,
			matchId, 
			homeTeamScore,
			awayTeamScore,
			contactName,
			contactPhone
		})

		return hunch
	}
}