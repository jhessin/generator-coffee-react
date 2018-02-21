###       eslint-disable        ###
### Required for React's Linter ###
###       global Phaser         ###
### *** Required for Phaser *** ###
###*****************************###
window.PIXI = require('phaser-ce/build/custom/pixi')
window.p2 = require('phaser-ce/build/custom/p2')
window.Phaser = require('phaser-ce/build/custom/phaser-split')
### ^^^^^^^^^^^^^^ Required to use Phaser ^^^^^^^^^^^^^^ ###

import _star from './assets/star.png'
import _sky from './assets/sky.png'
import _platform from './assets/platform.png'
import _dude from './assets/dude.png'

class Boot
  preload: ->
    @game.load.image 'sky', _sky
    @game.load.image 'ground', _platform
    @game.load.image 'star', _star
    @game.load.spritesheet 'dude', _dude, 32, 48

  create: ->
    # Load the physics engine
    @game.physics.startSystem Phaser.Physics.ARCADE

    # background
    @game.add.sprite 0, 0, 'sky'

    # platform group
    @platforms = @game.add.group()
    @platforms.enableBody = true

    # add a ground object
    ground = @platforms.create 0, @game.world.height - 64, 'ground'
    ground.scale.setTo 2, 2
    ground.body.immovable = true

    # Create two ledges
    ledge = @platforms.create 400, 400, 'ground'
    ledge.body.immovable = true
    ledge = @platforms.create -150, 250, 'ground'
    ledge.body.immovable = true

    # Add some stars
    @stars = @game.add.group()
    @stars.enableBody = true

    for i in [0...12] by 1
      star = @stars.create i * 70, 0, 'star'
      star.body.gravity.y = 6
      star.body.bounce.y = 0.7 + Math.random() * 0.2

    # Enter Player One
    @player = @game.add.sprite 32, @game.world.height - 150, 'dude'

    # Player physics
    @game.physics.arcade.enable @player
    @player.body.bounce.y = 0.2
    @player.body.gravity.y = 300
    @player.body.collideWorldBounds = true

    # Player animations
    @player.animations.add 'left', [ 0, 1, 2, 3 ], 10, true
    @player.animations.add 'right', [ 5, 6, 7, 8 ], 10, true

    # Get cursors for input
    @cursors = @game.input.keyboard.createCursorKeys()

    # Initialize the scoreboard
    @score = 0
    @scoreText = @game.add.text 16, 16, 'score: 0',
      fontSize: '32px'
      fill: '#000'

  update: ->
    hitPlatform = @game.physics.arcade.collide @player, @platforms
    @game.physics.arcade.collide @stars, @platforms
    @game.physics.arcade.overlap @player, @stars, (player, star) =>
      star.kill()
      @score += 10
      @scoreText.text = "Score: #{@score}"

    @player.body.velocity.x =
      if @cursors.left.isDown
        @player.animations.play 'left'
        -150
      else if @cursors.right.isDown
        @player.animations.play 'right'
        150
      else
        @player.animations.stop()
        @player.frame = 4
        0
    if @cursors.up.isDown and
      @player.body.touching.down and hitPlatform
        @player.body.velocity.y = -350


export { Boot }
