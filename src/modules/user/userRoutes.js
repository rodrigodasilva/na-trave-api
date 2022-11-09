import Router from 'koa-router'
import jwt from 'koa-jwt'

import * as userController from './userController.js'
import * as authController from './authController.js'
import { validationMiddleware } from '../../shared/middlewares/validation.middleware.js'
import { createUserValidator } from './userValidators.js'
import { roleMiddleware } from '../../shared/middlewares/role.middleware.js'
import { role } from '../../shared/const/roles.js'


const userRoutes = new Router()

userRoutes.post('/login', authController.login)

userRoutes.use(jwt({ secret: process.env.JWT_SECRET }))

userRoutes.post(
  '/user',
  roleMiddleware([role.ADMIN]),
  validationMiddleware(createUserValidator),
  userController.create
)


export { userRoutes }