import { CreateHunchUseCase } from "./useCases/CreateHunchUseCase.js"

export async function create(ctx) {
	const { 
		matchId, 
		homeTeamScore,
		awayTeamScore,
		contactName,
		contactPhone
	} = ctx.request.body

	const userId = ctx.state.user.id

	const createHunchUseCase = new CreateHunchUseCase()
	const hunch = await createHunchUseCase.execute({
		sellerId: userId,
		matchId: Number(matchId), 
		homeTeamScore: Number(homeTeamScore),
		awayTeamScore: Number(awayTeamScore),
		contactName,
		contactPhone
	})

	ctx.body = hunch
}