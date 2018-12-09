'use strict'

module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)

  let presets = ['next/babel']
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ]

  if (process.env['NODE_ENV'] === 'mocha') {
    presets = ['@babel/preset-env', 'next/babel', '@babel/preset-react']
  }

  return {
    presets,
    plugins,
  }
}
