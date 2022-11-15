import { CreateHunchesUseCase } from "./useCases/CreateHunchesUseCase.js"
import { FindAllHunchesUseCase } from "./useCases/FindAllHunchesUseCase.js"
import { FindHunchesBySellerUseCase } from "./useCases/FindHunchesBySellerUseCase.js"
import { FindPublicHunchesUseCase } from "./useCases/FindPublicHunchesUseCase.js"

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