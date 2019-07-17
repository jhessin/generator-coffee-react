# generator-coffee-react [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## NOTE - This project is no longer maintained. You should try [generator-coffee-mithril](https://github.com/jhessin/generator-coffee-mithril) or one of it's forks for a much smoother flow.
> A simple project using create-react-app, coffeescript, and a custom version of react-hyperscript-helpers.

# Table of Contents

[Installation](#installation)

[Usage](#usage)

[Related Projects](#related-projects)

[Known Issues](#known-issues)

[Future Plans / ToDo](#future-plans)

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

Because it uses create-react-app a new folder is always created for you (don't let yeoman's warning message fool you.)

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
yarn comp ComponentName
```

This will generated the component ComponentName and add it to `cs/components` by default and create a reference in `cs/components/index.coffee` so you can simply do this in your App.coffee file.

```coffeescript
import { ComponentName } from './components'
```

If you need to use any library components you can just use the `h` function from my `react-hyperscript-helpers` library like so:

> ### NOTE:
>
> This has become the default method of accessing classes as of v0.0.9. It tends to be less error prone as the first line is always the same `h componentName,`. The former way of wrapping the component in `hh` is still valid and available. [Find out more here.](https://github.com/jhessin/react-hyperscript-helpers)

```coffeescript
render: ->
  h 'div',
    '.App'
    h 'header',
      '.App-header'
      h 'img',
        '.App-logo'
        src: logo
        alt: 'logo'
      h 'h1',
        '.App-title'
        'Welcome to React'
    h 'p',
      '.App-intro'
      'To get started, edit '
      h 'code', 'cs/App.coffee'
      ' and save to reload.'
    h LibraryComponent
```

> ## NEW

> I just added the option to generate a scaffolding to include a phaser game in your page!
> Just do this:

> ```bash
> yarn comp Game --phaser
> ```

> Then you can do this:

> ```coffeescript
> import { Game } from './components'
> ```

> and in your render method:
>
> ```coffeescript
> render: ->
>   h Game
> ```
>
> You can place it anywhere on your page!

There is also a similar method of adding a controller model with all the same options:

```bash
yarn cont myController
```

This creates `myController.coffee` in the `cs/controllers` folder and adds it to `cs/controllers/index.coffee` for you.

## Related projects

* [create-react-app](https://github.com/facebook/create-react-app)
* [react-hyperscript-helpers](https://github.com/jhessin/react-hyperscript-helpers)
* [coffeescript](coffeescript.org)
* [coffeelint](coffeelint.org)

## Known Issues

* [x] ~~Currently only works with Yarn. I should be able to work this out shortly.~~
* [x] ~~You will be prompted to overwrite your `package.json` file. This is a limitation of Yeoman as there is no way to update the file once `create-react-app` creates it.~~
  # :smile:None?!?:smile::thumbsup:

## Future Plans

* [ ] Adding support for react native with a --native option.
* [ ] Add generators for linking to my favorite libraries.
* [ ] Test this thing on windows.

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
