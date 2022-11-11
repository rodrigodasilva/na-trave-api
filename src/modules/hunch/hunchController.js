import { CreateHunchesUseCase } from "./useCases/CreateHunchesUseCase.js"

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