import Router from 'koa-router'
import jwt from 'koa-jwt'

import * as hunchController from './hunchController.js'
import { validationMiddleware } from '../../shared/middlewares/validation.middleware.js'
import { role } from '../../shared/const/roles.js'
import { createHunchValidator, updateHunchValidator } from './hunchValidators.js'
import { roleMiddleware } from '../../shared/middlewares/role.middleware.js'


const hunchRoutes = new Router()

hunchRoutes.post(
  '/hunch',
  jwt({ secret: process.env.JWT_SECRET }),
  roleMiddleware([role.SELLER]),  
  validationMiddleware(createHunchValidator),
  hunchController.create
)

hunchRoutes.put(
  '/hunch',
  jwt({ secret: process.env.JWT_SECRET }),
  roleMiddleware([role.SELLER]),  
  validationMiddleware(updateHunchValidator),
  hunchController.update
)

hunchRoutes.get(
  '/public/hunch/match/:matchId',
  hunchController.indexPublic
)

hunchRoutes.get(
  '/hunch/match/:matchId',
  jwt({ secret: process.env.JWT_SECRET }),
  hunchController.index
)

hunchRoutes.get(
  '/hunch/match/:matchId/seller/:sellerId',
  jwt({ secret: process.env.JWT_SECRET }),
  hunchController.indexBySeller
)

export { hunchRoutes }