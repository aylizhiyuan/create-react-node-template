const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const static = require('koa-static')
const nunjucks = require('koa-nunjucks-2')
const bodyParser = require('koa-bodyParser')
const config = require('./lib/config.js')
const app = new Koa()
const isDev = app.env === 'development'
const port = config.server.port || 8080
const router = require('./lib/router')
app.use(bodyParser())
app.use(static(path.join(__dirname, './static')))
app.use(
  nunjucks({
    ext: 'html',
    path: path.join(__dirname, './views'),
    nunjucksConfig: {
      noCache: isDev,
      autoescape: true,
    },
  })
)
app.use(router.routes())
app.listen(port, () => {
  console.log(`Node server listening on port ${port}`)
})
