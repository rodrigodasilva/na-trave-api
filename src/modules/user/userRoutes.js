import Router from 'koa-router'
import jwt from 'koa-jwt'

import * as userController from './userController.js'
import { validationMiddleware } from '../../shared/middlewares/validation.middleware.js'
import { createUserValidator } from './userValidators.js'


const userRoutes = new Router()

// router.patch(
//   '/v1/matches',
//   roleMiddleware(['admin']),
//   matchesController.updateMatchScore
// )

userRoutes.post('/user', validationMiddleware(createUserValidator), userController.create)
userRoutes.post('/login', userController.create)


export { userRoutes }