import Router from 'koa-router'
import { matchRoutes } from './modules/match/matchRoutes.js'

import { userRoutes } from './modules/user/userRoutes.js'

const router = new Router({ prefix: '/v1' })

router.use(userRoutes.routes(), userRoutes.allowedMethods())
router.use(matchRoutes.routes(), matchRoutes.allowedMethods())

export { router }


