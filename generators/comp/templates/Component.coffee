### eslint-disable import/first ###
import { Component } from 'react'
import { PropTypes } from 'prop-types'

import { div, p, hh } from '@jhessin/react-hyperscript-helpers'

export <%=componentName%> = hh class extends Component
  @propTypes: {}
  @defaultProps: {}
  state: {}

  render: ->
    div ".someClass",
      p ".App-intro",
        'This is the <%= componentName %> component!'
