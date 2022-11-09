import { UnauthorizedError } from '../errors/unauthorizedError.js'

export function roleMiddleware(roles) {
	return async (ctx, next) => {
		const role = ctx.state.user.role

		if (roles.includes(role)) {
				await next()
		} else {
				throw new UnauthorizedError()
		}
	}
}