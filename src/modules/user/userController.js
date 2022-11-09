import { CreateUserUseCase } from './useCases/CreateUserUseCase.js'

export async function create(ctx) {
	const { name, username, email, password, role } = ctx.request.body

	// const role2 = ctx.state.user.role

	// console.log({role2})
	
	const createUserUseCase = new CreateUserUseCase()
	const user = await createUserUseCase.execute({ name, username, email, password, role })

	ctx.body = user
}