### eslint-disable import/first ###
import { Component } from 'react'
import { div, p, hh } from '@jhessin/react-hyperscript-helpers'

export <%=componentName%> = hh class extends Component
  state: {}
  @defaultProps: {}

  render: ->
    div ".someClass",
      p ".App-intro",
        'This is the <%= componentName %> component!'
