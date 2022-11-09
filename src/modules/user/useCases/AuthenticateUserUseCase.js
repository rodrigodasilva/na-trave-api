
import { UserNotFoundError } from '../../../shared/errors/userNotFoundError.js'
import { cryptUtils, jwtUtils } from '../../../shared/utils/index.js'
import { UserService } from '../UserService.js'

const userService = new UserService()

export class AuthenticateUserUseCase {
	async execute({ email, password }) {    
		const user = await userService.findByEmail(email)
		if (!user) throw new UserNotFoundError()

		const passwordMatch = await cryptUtils.comparePassword(password, user.password)
		if (!passwordMatch) throw new UserNotFoundError()

    delete user.password

    const token = jwtUtils.sign(user)
    
		return { user, token }
	}
}