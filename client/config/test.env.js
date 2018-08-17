var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  historyApiFallback: true,
  NODE_ENV: '"testing"'
})
