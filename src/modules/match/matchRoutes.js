import Router from 'koa-router'
// import jwt from 'koa-jwt'

import * as matchController from './matchController.js'
import { validationMiddleware } from '../../shared/middlewares/validation.middleware.js'
import { commonValidator } from '../../shared/validators/commonValidator.js'


const matchRoutes = new Router()

// matchRoutes.use(jwt({ secret: process.env.JWT_SECRET }))

matchRoutes.get(
  '/match',
  validationMiddleware({ date: commonValidator.date() }, 'query'),
  matchController.index
)

export { matchRoutes }