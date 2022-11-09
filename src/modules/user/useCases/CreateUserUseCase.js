
import { BaseError } from '../../../shared/errors/baseError.js'
import { cryptUtils } from '../../../shared/utils/index.js'
import { UserService } from '../UserService.js'

const userService = new UserService()

export class CreateUserUseCase {
	async execute({ name, username, email, password, role }) {
		const userEmailAlreadyExists = await userService.findByEmail(email)        
		if (userEmailAlreadyExists) throw new BaseError(400, 'Email já cadastrado')

		const usernameAlreadyExists = await userService.findByUsername(username)        
		if (usernameAlreadyExists) throw new BaseError(400, 'Username já cadastrado')
		
		const encryptedPassword = await cryptUtils.hashPassword(password)
		const user = await userService.create({ 
			name, 
			username, 
			email, 
			password: encryptedPassword, 
			role 
		})
		
		delete user.password

		return user
	}
}