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

	async createMany(hunches) {
		return await client.$transaction(
			hunches.map((hunch) => client.hunch.create({ data: hunch })),
	 	)
	}
}