import { client } from '../../database/prismaClient.js'

export class UserService {
	create(user) {
		return client.user.create({
			data: {
				...user
			}
		})
	}

	findByUsername(username) {
		return client.user.findUnique({
			where: { username }
		})
	}
	
	findByEmail(email) {
		return client.user.findUnique({
			where: { email }
		})
	}

	findById(id) {
		return client.user.findUnique({
			where: { id }
		})
	}
}