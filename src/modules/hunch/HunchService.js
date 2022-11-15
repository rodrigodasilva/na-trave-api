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

	findById(id) {
		return client.hunch.findFirst({			
			where: { id }
		})
	}

	findPublic(id) {
		return client.hunch.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			where: {
				matchId: id
			},
			select: {
				id: true,
				matchId: true,
				awayTeamScore: true,
				homeTeamScore: true,
				contactName: true,
				createdAt: true,
				match: {
					include: {
						homeTeam: true,
						awayTeam: true
					}
				}
			}
		})
	}

	findAll(id) {
		return client.hunch.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			where: {
				matchId: id
			},
			include: {				
				match: {
					include: {
						homeTeam: true,
						awayTeam: true
					}
				}
			}
		})
	}

	findBySeller(id, sellerId) {
		return client.hunch.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			where: {
				matchId: id,
				sellerId: sellerId
			},
			include: {				
				match: {
					include: {
						homeTeam: true,
						awayTeam: true
					}
				}
			}
		})
	}

	update(id, data) {
		return client.hunch.update({
			where: { id },
			data
		})
	}
}