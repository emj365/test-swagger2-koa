import { ui, router as swaggerRouter, Router } from 'swagger2-koa'

let router = swaggerRouter(__dirname + '/swagger.yml')

router.get('/api/ping', async context => {
  context.status = 200
  context.body = {
    serverTime: new Date().toISOString()
  }
})

router
  .app() // get the koa 2 server
  .listen(3000) // start handling requests on port 3000
console.log('done 3000')
