import { AuthenticateUserUseCase } from './useCases/AuthenticateUserUseCase.js'

export async function login(ctx) {
	const { email, password } = ctx.request.body

  const authenticateUserUseCase = new AuthenticateUserUseCase()
  const { user, token } = await authenticateUserUseCase.execute({ email, password })  

  ctx.body = { user, token }
}