import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import serve from 'koa-static'

import { router } from './routes.routes.js'
import { errorMiddleware } from './middlewares/index.js'

const app = new Koa()

app.use(serve('./public'))
app.use(bodyParser())
app.use(cors())
app.use(errorMiddleware)

app.use(router.routes())
app.use(router.allowedMethods())

const port = process.env.SERVER_PORT

export function startServer() {
    app.listen(port, () => console.log('Server is running!'))
}