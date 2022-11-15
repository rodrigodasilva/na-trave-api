import { client } from '../../database/prismaClient.js'

export class MatchService {
	findByDate(minDate, maxDate) {
		return client.match.findMany({
			where: {
				datetime: {
					lte: maxDate,
					gte: minDate
				}
			},
			include: {
				homeTeam: true,
				awayTeam: true,
			}
		})
	}

	findById(id) {
		return client.match.findFirst({
			where: {
				id
			},
			include: {
				awayTeam: true,
				homeTeam: true
			}
		})
	}

	updateMatchScores(id, homeTeamScore, awayTeamScore) {
		return client.match.update({
			where: { id },
			data: {
				homeTeamScore,
				awayTeamScore
			}
		})
	}
}