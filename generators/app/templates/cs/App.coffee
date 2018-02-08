###   eslint-disable import/first   ###
# ^^^ Required for React's Linter ^^^ #
###^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^###
import { Component } from 'react'
import {
  div, header, img,
  h1, p, code, hh
} from '@jhessin/react-hyperscript-helpers'
import logo from './logo.svg'
import './App.css'

class App extends Component
  render: ->
    div ".App",
      header ".App-header",
        img ".App-logo",
          src: logo
          alt: "logo"
        h1 ".App-title",
          'Welcome to React'
      p ".App-intro",
        'To get started, edit '
        code 'cs/App.coffee'
        ' and save to reload.'

export default hh(App)
