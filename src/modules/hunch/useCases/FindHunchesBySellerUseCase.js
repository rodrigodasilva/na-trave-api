import { UnauthorizedError } from '../../../shared/errors/unauthorizedError.js'
import { HunchService } from '../HunchService.js'

const hunchService = new HunchService()

export class FindHunchesBySellerUseCase {
	async execute({ matchId, sellerId, userAuth }) {

    const userHasPermission = userAuth.id === sellerId || userAuth.role === 'admin'
    if (!userHasPermission) throw new UnauthorizedError()

		const hunches = await hunchService.findBySeller(matchId, sellerId)

		return hunches
	}
}