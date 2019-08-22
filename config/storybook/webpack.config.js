const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })
  config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
  config.resolve.alias['~'] = path.resolve(__dirname, '../../src')
  return config
}
