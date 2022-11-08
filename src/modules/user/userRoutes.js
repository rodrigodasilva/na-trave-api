import Router from 'koa-router'
import jwt from 'koa-jwt'


import * as userController from './userController.js'

const userRoutes = new Router({ prefix: '/user' })

// router.patch(
//   '/v1/matches',
//   roleMiddleware(['admin']),
//   matchesController.updateMatchScore
// )

userRoutes.get('/', userController.create)

export { userRoutes }