var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  historyApiFallback: true,
  NODE_ENV: '"development"'
})
