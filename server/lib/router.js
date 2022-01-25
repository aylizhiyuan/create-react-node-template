const Router = require('koa-router')
const path = require('path')
const glob = require('glob')

const router = new Router()

const controllersDir = path.join(__dirname, '../controllers')

glob
  .sync('**/*.js', {
    cwd: controllersDir,
  })
  .forEach((ctrPath) => {
    require(path.join(controllersDir, ctrPath))(router)
  })

module.exports = router
