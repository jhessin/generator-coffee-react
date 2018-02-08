###   eslint-disable import/first   ###
# ^^^ Required for React's Linter ^^^ #
###^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^###
import { Component } from 'react'
# import { PropTypes } from 'prop-types'
import { h } from '@jhessin/react-hyperscript-helpers'
import logo from './logo.svg'
import './App.css'

class App extends Component
  @propTypes: {}
  @defaultProps: {}
  state: {}

  render: ->
    h 'div',
      '.App'
      h 'header',
        '.App-header'
        h 'img',
          '.App-logo'
          src: logo
          alt: 'logo'
        h 'h1',
          '.App-title'
          'Welcome to React'
      h 'p',
        '.App-intro'
        'To get started, edit '
        h 'code', 'cs/App.coffee'
        ' and save to reload.'

export default App
