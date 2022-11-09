import { FindMatchesByDateUseCase } from './useCases/FindMatchesByDateUseCase.js'

export async function index(ctx) {
	const { date } = ctx.query

	const findMatchesByDateUseCase = new FindMatchesByDateUseCase()
	const matches = await findMatchesByDateUseCase.execute(date)

	ctx.body = matches
}