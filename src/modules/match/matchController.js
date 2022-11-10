import { FindMatchesByDateUseCase } from './useCases/FindMatchesByDateUseCase.js'
import { ShowMatchUseCase } from './useCases/ShowMatchUserCase.js'

export async function index(ctx) {
	const { date } = ctx.query

	const findMatchesByDateUseCase = new FindMatchesByDateUseCase()
	const matches = await findMatchesByDateUseCase.execute(date)

	ctx.body = matches
}

export async function show(ctx) {
	const { id } = ctx.params

	const showMatchUseCase = new ShowMatchUseCase()
	const match = await showMatchUseCase.execute(Number(id))

	ctx.body = match
}