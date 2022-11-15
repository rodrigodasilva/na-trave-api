import Router from 'koa-router'
import jwt from 'koa-jwt'

import * as matchController from './matchController.js'
import { validationMiddleware } from '../../shared/middlewares/validation.middleware.js'
import { commonValidator } from '../../shared/validators/commonValidator.js'
import { roleMiddleware } from '../../shared/middlewares/role.middleware.js'
import { updateMatchScoreValidator } from './matchValidators.js'


const matchRoutes = new Router()

matchRoutes.get(
  '/match',
  validationMiddleware({ date: commonValidator.date() }, 'query'),
  matchController.index
)

matchRoutes.get(
  '/match/:id',
  validationMiddleware({ id: commonValidator.matchId() }, 'params'),
  matchController.show
)

matchRoutes.patch(
  '/match',
  jwt({ secret: process.env.JWT_SECRET }),
  roleMiddleware(['admin']),
  validationMiddleware(updateMatchScoreValidator),
  matchController.updateScore
)


export { matchRoutes }