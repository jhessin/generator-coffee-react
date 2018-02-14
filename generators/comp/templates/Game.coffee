###   eslint-disable import/first   ###
###         global Phaser           ###
# ^^^ Required for React's Linter ^^^ #
###^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^###
window.PIXI = require('phaser-ce/build/custom/pixi')
window.p2 = require('phaser-ce/build/custom/p2')
window.Phaser = require('phaser-ce/build/custom/phaser-split')

import { Boot } from './states'

# Customize the game here-------
config =
  width: 800
  height: 600
  renderer: Phaser.AUTO
  antialias: true
  multiTexture: true
  parent: 'game'
  state: Boot


# Create your data
class Game extends Phaser.Game
  constructor: ->
    super config
    # @state.add 'Boot', Boot
    # @state.start 'Boot'

import { Component } from 'react'
# import { PropTypes } from 'prop-types'

import { h } from '@jhessin/react-hyperscript-helpers'

class GameComponent extends Component
  @propTypes: {}
  @defaultProps: {}
  state: {}

  componentWillMount: ->
    @game = new Game()

  render: ->
    h 'div',
      id: 'game'

export { GameComponent as <%=compnonentName%> }
