###       eslint-disable        ###
### Required for React's Linter ###
###*****************************###
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { h } from '@jhessin/react-hyperscript-helpers'

it 'renders without crashing', ->
  div = document.createElement 'div'
  ReactDOM.render h(App), div
  ReactDOM.unmountComponentAtNode div
  return
