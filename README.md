# generator-coffee-react [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> A simple project using create-react-app, coffeescript, and a custom version of react-hyperscript-helpers.

**NOTE:** This package is not on npm yet so the installation instructions will not work. If you want to use it you need to clone it and then either run `yarn global link` or `npm -g link` from inside the created directory. Then install yeoman and create-react-app globally as instructed below.

# Table of Contents

[Installation](#installation)

[Usage](#usage)

[Related Projects](#related-projects)

[Known Issues](#known-issues)

[Getting To Know Yeoman](#getting-to-know-yeoman)

[License](#license)

---

## Installation

First, install [Yeoman](http://yeoman.io) and generator-coffee-react using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

This generator also depends on the create-react-app also available on npm.

```bash
npm install -g yo create-react-app generator-coffee-react
```

or

```bash
yarn global add yo create-react-app generator-coffee-react
```

Then generate your new project:

```bash
yo coffee-react
```

This will prompt you for a name for your app. You may also provide a name like this:

```bash
yo coffee-react my-app-name
```

Keep in mind this will be fed to create-react-app and will need to support it's naming conventions (no-caps, etc.).

## Usage

Change directory into your project and run `yarn start` or `npm start`. This script will automatically compile all the coffeescript files in the cs folder and place them in the src folder where they are then served up by the react native live server. Press control-C to quit.

To create other component you should use the coffee-react:comp generator like this:

```bash
yarn comp
```

or

```bash
npx comp
```

The benefit of the intermediate compiling being done here is you don't need to include the .coffee extension in your imports (not it isn't done in index.coffee). This is automatically translated when your files are copied into JS.

You can also run this straight from the command line. like so:

```bash
yarn comp path/to/components ComponentName
```

If you need to use any library components you can just use the `h` function from my `react-hyperscript-helpers` library like so:

```coffeescript
### eslint-disable import/first ###
import { Component } from 'react'
import {
  div, header, img,
  h1, p, code, h, hh
} from '@jhessin/react-hyperscript-helpers'

import LibraryComponent from 'SomeReactLibrary'
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
        code 'src/App.js'
        ' and save to reload.'
      h LibraryComponent

export default hh(App)
```

## Related projects

* [create-react-app](https://github.com/facebook/create-react-app)
* [react-hyperscript-helpers](https://github.com/jhessin/react-hyperscript-helpers)
* [coffeescript](coffeescript.org)
* [coffeelint](coffeelint.org)

## Known Issues

* [x] ~~Currently only works with Yarn. I should be able to work this out shortly.~~
* [x] ~~You will be prompted to overwrite your `package.json` file. This is a limitation of Yeoman as there is no way to update the file once `create-react-app` creates it.~~
  # :smile:None?!?:smile::thumbsup:

## Getting To Know Yeoman

* Yeoman has a heart of gold.
* Yeoman is a person with feelings and opinions, but is very easy to work with.
* Yeoman can be too opinionated at times but is easily convinced not to be.
* Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Jim Hessin](grillbrickstudios.com)

[npm-image]: https://badge.fury.io/js/generator-coffee-react.svg
[npm-url]: https://npmjs.org/package/generator-coffee-react
[travis-image]: https://travis-ci.org/jhessin/generator-coffee-react.svg?branch=master
[travis-url]: https://travis-ci.org/jhessin/generator-coffee-react
[daviddm-image]: https://david-dm.org/jhessin/generator-coffee-react.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jhessin/generator-coffee-react
[coveralls-image]: https://coveralls.io/repos/jhessin/generator-coffee-react/badge.svg
[coveralls-url]: https://coveralls.io/r/jhessin/generator-coffee-react
