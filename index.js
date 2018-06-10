const { render } = require('prettyjson')
const data = require('./lib/data')

const renderOpts = {
  keysColor: 'cyan',
  dashColor: 'cyan',
  // stringColor: 'cyan'
}

module.exports = () => render(data, renderOpts)