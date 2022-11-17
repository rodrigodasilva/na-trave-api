import { CreateHunchesUseCase } from "./useCases/CreateHunchesUseCase.js"
import { FindAllHunchesUseCase } from "./useCases/FindAllHunchesUseCase.js"
import { FindHunchesBySellerUseCase } from "./useCases/FindHunchesBySellerUseCase.js"
import { FindPublicHunchesUseCase } from "./useCases/FindPublicHunchesUseCase.js"
import { FindWinnersHunchesUseCase } from "./useCases/FindWinnersHunchesUseCase.js"
import { UpdateHunchUseCase } from "./useCases/UpdateHunchUseCase.js"

export async function indexPublic(ctx) {
	const { matchId } = ctx.request.params

	const findPublicHunchMatchesUseCase = new FindPublicHunchesUseCase()
	const hunches = await findPublicHunchMatchesUseCase.execute({ matchId: Number(matchId) })

	ctx.body = hunches
}

export async function index(ctx) {
	const { matchId } = ctx.request.params	

	const findAllHunchesUseCase = new FindAllHunchesUseCase()
	const hunches = await findAllHunchesUseCase.execute({ matchId: Number(matchId) })

	ctx.body = hunches
}

export async function indexBySeller(ctx) {
	const { 
		matchId,
		sellerId
	} = ctx.request.params

	const findHunchesBySellerUseCase = new FindHunchesBySellerUseCase()
	const hunches = await findHunchesBySellerUseCase.execute({ 
		matchId: Number(matchId), 
		sellerId,
		userAuth: ctx.state.user
	})
	
	ctx.body = hunches
}

export async function indexWinners(ctx) {
	const { 
		matchId,
	} = ctx.request.params

	const findWinnersHunchesUseCase = new FindWinnersHunchesUseCase()
	const winnersHunches = await findWinnersHunchesUseCase.execute({ matchId: Number(matchId) })

	ctx.body = winnersHunches
}

export async function create(ctx) {
	const { 
		matchId, 
		homeTeamScore,
		awayTeamScore,
		contactName,
		contactPhone,
		payment,
		quantity
	} = ctx.request.body

	const userId = ctx.state.user.id

	const createHunchesUseCase = new CreateHunchesUseCase()
	const hunches = await createHunchesUseCase.execute({
		sellerId: userId,
		matchId: Number(matchId), 
		homeTeamScore: Number(homeTeamScore),
		awayTeamScore: Number(awayTeamScore),
		contactName,
		contactPhone,
		payment,
		quantity: Number(quantity)
	})

	ctx.body = hunches
}

export async function update(ctx) {
	const { 
		id,
		homeTeamScore,
		awayTeamScore,
		contactName,
		contactPhone,
		payment,
	} = ctx.request.body


	const userId = ctx.state.user.id

	const updateHunchUseCase = new UpdateHunchUseCase()
	const hunch = await updateHunchUseCase.execute({
		id,
		userId: userId,
		homeTeamScore: Number(homeTeamScore),
		awayTeamScore: Number(awayTeamScore),
		contactName,
		contactPhone,
		payment
	})

	ctx.body = hunch
}