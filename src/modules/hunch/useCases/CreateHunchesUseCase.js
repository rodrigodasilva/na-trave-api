
import { HunchService } from '../HunchService.js'

const hunchService = new HunchService()

export class CreateHunchesUseCase {
	async execute({
		sellerId,
		matchId, 
		homeTeamScore,
		awayTeamScore,
		contactName,
		contactPhone,
		payment,
		quantity
	 }) {
		
		const hunchesToCreate = new Array(quantity).fill({ 
			sellerId,
			matchId,
			homeTeamScore,
			awayTeamScore,
			contactName,
			contactPhone,
			payment
		 })

		const hunches = await hunchService.createMany(hunchesToCreate)

		return hunches
	}
}