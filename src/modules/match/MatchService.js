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
					awayTeam: true
			}
		})
	}
}