###       eslint-disable        ###
### Required for React's Linter ###
###*****************************###
import { Component } from 'react'
# import { PropTypes } from 'prop-types'
import { h } from '@jhessin/react-hyperscript-helpers'
import reactLogo from './images/react.svg'
import plusLogo from './images/plus.svg'
import coffeeLogo from './images/coffee.svg'
import './styles/App.css'

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
          '.App-logo-spin'
          src: reactLogo
          alt: 'logo'
        h 'img',
          '.App-plus'
          src: plusLogo
          alt: '+'
        h 'img',
          '.App-logo'
          src: coffeeLogo
          alt: 'coffee'
        h 'h1',
          '.App-title'
          'Welcome to Coffee-React!'
      h 'p',
        '.App-intro'
        'To get started, open '
        h 'code', 'cs/App.coffee'
        ' and save to reload.'

export default App
