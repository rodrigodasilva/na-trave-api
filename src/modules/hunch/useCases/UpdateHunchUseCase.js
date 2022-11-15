
import { HunchAfterMatchStartError } from '../../../shared/errors/hunchAfterMatchStartError.js'
import { HunchNotFoundError } from '../../../shared/errors/hunchNotFoundError.js'
import { MatchNotFoundError } from '../../../shared/errors/matchNotFoundError.js'
import { UnauthorizedError } from '../../../shared/errors/unauthorizedError.js'
import { UserNotFoundError } from '../../../shared/errors/userNotFoundError.js'
import { dateUtils } from '../../../shared/utils/index.js'
import { MatchService } from '../../match/MatchService.js'
import { UserService } from '../../user/UserService.js'
import { HunchService } from '../HunchService.js'

const hunchService = new HunchService()
const userService = new UserService()
const matchService = new MatchService()

export class UpdateHunchUseCase {
	async execute({
    id,
		userId,
		homeTeamScore,
		awayTeamScore,
		contactName,
		contactPhone,
		payment
	 }) {
    const user = await userService.findById(userId)
    if (!user) throw new UserNotFoundError()

    const hunch = await hunchService.findById(id)
    if (!hunch) throw new HunchNotFoundError()

    const userHasPermission = user.id === hunch.sellerId
    if (!userHasPermission) throw new UnauthorizedError()

    const match = await matchService.findById(hunch.matchId)
    if (!match) throw new MatchNotFoundError()

    if (dateUtils.dateIsBeforeNow(match.datetime)) {
      throw new HunchAfterMatchStartError()
    }

    const updatedHunch = await hunchService.update(id, {
      homeTeamScore,
      awayTeamScore,
      contactName,
      contactPhone,
      payment,
    }) 

    return updatedHunch
	}
}