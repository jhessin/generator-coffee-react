'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const DEFAULT_PATH = 'cs/controllers';

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('controllerName', { type: String, required: false });

    this.argument('path', { type: String, required: false });
  }

  prompting() {
    if (this.options.controllerName) {
      if (this.options.path) this.props = this.options;
      else
        this.props = Object.assign(this.options, {
          path: DEFAULT_PATH
        });
      // { ...this.options, path: DEFAULT_PATH };
      return;
    }

    return this.prompt([
      {
        type: 'input',
        name: 'controllerName',
        message: 'Name of control object?',
        default: this.options.controllerName || 'myController'
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where would you like the control object?',
        default: DEFAULT_PATH
      }
    ]).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.log(
      yosay(
        `Creating  ${chalk.red(this.props.controllerName)} in ${chalk.red(
          this.props.path
        )}`
      )
    );

    this.destinationRoot(this.destinationPath(this.props.path));

    this.fs.copyTpl(
      this.templatePath('controller.coffee'),
      this.destinationPath(this.props.controllerName + '.coffee'),
      this.props
    );

    if (this.fs.exists('index.coffee')) {
      this.log(chalk.green('Adding to index.coffee file. Please confirm...'));
      this.fs.append(
        this.destinationPath('index.coffee'),
        `export * from './${this.props.controllerName}'`
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('index.coffee'),
        this.destinationPath('index.coffee'),
        this.props
      );
    }
  }
};
