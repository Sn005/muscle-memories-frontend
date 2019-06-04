// Start json-server
import { db } from './mock-db'
import jsonServer from 'json-server'
import { mockApiPort } from '../../../config/app'
const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const port = mockApiPort

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})
