const koaRouter = require('koa-router')

module.exports = (mainRouter) => {
  let router = koaRouter()
  router.get('(.*)', async (ctx) => {
    await ctx.render('index')
  })
  mainRouter.use(router.routes())
}
