import { app } from "./app.js"

const port = process.env.SERVER_PORT

export function startServer() {
    app.listen(port, () => console.log('Server is running!'))
}