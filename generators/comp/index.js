'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('componentName', { type: String, required: false });
  }

  prompting() {
    if (this.options.componentName) {
      this.props = this.options;
      return;
    }

    return this.prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'Name of component?',
        default: 'MyComponent'
      }
    ]).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.log(yosay(`Creating  ${chalk.red(this.props.componentName)}`));

    this.fs.copyTpl(
      this.templatePath('<%=componentName%>.coffee'),
      this.destinationPath(this.props.componentName + '.coffee'),
      this.props
    );
  }
};
