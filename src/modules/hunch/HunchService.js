import { client } from '../../database/prismaClient.js'

export class HunchService {
	create({
		sellerId,
		matchId, 
		homeTeamScore,
		awayTeamScore,
		contactName,
		contactPhone
	}) {
		return client.hunch.create({
			data: {
				sellerId,
				matchId,
				homeTeamScore,
				awayTeamScore,
				contactName,
				contactPhone
			}
		})
	}
}