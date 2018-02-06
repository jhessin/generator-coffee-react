### eslint-disable import/first ###
import { Component } from 'react'
import { div, p, hh } from '@jhessin/react-hyperscript-helpers'

class <%= componentName%> extends Component
  render: ->
    div ".someClass",
      p ".App-intro",
        'This is the <%= componentName %> component!'

export default hh(App)
