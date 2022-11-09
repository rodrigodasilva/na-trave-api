
import { dateUtils } from '../../../shared/utils/index.js'
import { MatchService } from '../MatchService.js'

const matchService = new MatchService()

export class FindMatchesByDateUseCase {
	async execute(date) {		
		const { startDate, endDate } = dateUtils.getStartAndEndDateOfDay(date)

		const matches = await matchService.findByDate(startDate, endDate)

		return matches
	}
}