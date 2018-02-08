###   eslint-disable import/first   ###
# ^^^ Required for React's Linter ^^^ #
###^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^###
import { Component } from 'react'
import { PropTypes } from 'prop-types'

import { div, p, hh } from '@jhessin/react-hyperscript-helpers'

<%=componentName%> = hh class <%=componentName%> extends Component
  @propTypes: {}
  @defaultProps: {}
  state: {}

  render: ->
    div ".someClass",
      p ".App-intro",
        'This is the <%= componentName %> component!'

export { <%=componentName%> }
