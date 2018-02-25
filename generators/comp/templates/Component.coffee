###       eslint-disable        ###
### Required for React's Linter ###
###*****************************###
import { Component } from 'react'
# import { PropTypes } from 'prop-types'

import { h } from '@jhessin/react-hyperscript-helpers'

class <%=componentName%> extends Component
  @propTypes: {}
  @defaultProps: {}
  state: {}

  render: =>
    h 'div',
      'This is the <%=componentName%> component'
      @props.children

export { <%=componentName%> }
