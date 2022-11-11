import Router from 'koa-router'
import jwt from 'koa-jwt'

import * as hunchController from './hunchController.js'
import { validationMiddleware } from '../../shared/middlewares/validation.middleware.js'
import { role } from '../../shared/const/roles.js'
import { createHunchValidator } from './hunchValidators.js'
import { roleMiddleware } from '../../shared/middlewares/role.middleware.js'


const hunchRoutes = new Router()

hunchRoutes.use(jwt({ secret: process.env.JWT_SECRET }))

hunchRoutes.post(
  '/hunch',
  jwt({ secret: process.env.JWT_SECRET }),
  roleMiddleware([role.SELLER]),  
  validationMiddleware(createHunchValidator),
  hunchController.create
)

export { hunchRoutes }