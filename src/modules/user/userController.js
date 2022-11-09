import { CreateUserUseCase } from './useCases/CreateUserUseCase.js'

export async function create(ctx) {
	const { name, username, email, password, role } = ctx.request.body

	const createUserUseCase = new CreateUserUseCase()
	const user = await createUserUseCase.execute({ name, username, email, password, role })

	ctx.body = user
}