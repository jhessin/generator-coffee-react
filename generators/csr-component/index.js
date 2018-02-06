'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
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
    this.fs.copyTpl(
      this.templatePath('<%=componentName%>.coffee'),
      this.destinationPath(this.props.componentName + '.coffee'),
      this.props
    );
  }
};
