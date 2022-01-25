const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const configPath = path.join(__dirname, '../../config/app.yaml')
const config = yaml.load(fs.readFileSync(configPath))

module.exports = config
