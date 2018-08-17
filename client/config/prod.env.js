module.exports = {
  NODE_ENV: '"production"',
  historyApiFallback: {
    rewrites: [
      {
        from: /.*/,
        to:  'index.html'
      }
    ]
  }
}
