'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('path', { type: String, required: false });

    this.argument('componentName', { type: String, required: false });
  }

  prompting() {
    if (this.options.componentName && this.options.path) {
      this.props = this.options;
      return;
    }

    return this.prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'Name of component?',
        default: this.options.componentName || 'MyComponent'
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where would you like the component?',
        default: this.options.path || this.destinationRoot()
      }
    ]).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.log(yosay(`Creating  ${chalk.red(this.props.componentName)}`));

    this.destinationRoot(this.destinationPath(this.props.path));

    this.fs.copyTpl(
      this.templatePath('Component.coffee'),
      this.destinationPath(this.props.componentName + '.coffee'),
      this.props
    );
  }
};
