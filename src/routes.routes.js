import Router from 'koa-router'

import { userRoutes } from './modules/user/userRoutes.js'

const router = new Router({ prefix: '/v1' })

router.use(userRoutes.routes(), userRoutes.allowedMethods())

export { router }


