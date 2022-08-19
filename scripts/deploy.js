/* eslint no-console: 0 */
const execa = require('execa')

console.log('start deploying...')
const startTime = Date.now()
const env = process.env.NODE_ENV || 'development'
const pkgName = process.env.npm_package_name

const deploy = async () => {
  // Catching an error
  try {
    if (env === 'development') {
      const devServer = `${pkgName}-dev-server`
      const res = await execa.command(`pm2 startOrRestart process.json --only ${devServer}`)
      console.log('res', res.stdout)
    } else {
      const res = await execa.command(`pm2 startOrRestart process.json --only ${pkgName}-${env}`)
      console.log('res prod', res.stdout)
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

try {
  deploy()
  const time = (Date.now() - startTime) / 1000
  console.log(`deploy success in ${time.toFixed(2)} s`)
} catch (error) {
  console.log(error)
  process.exit(1)
}
