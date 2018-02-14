'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const extend = require('deep-extend');

const DEFAULT_PATH = 'cs/components';

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('phaser');

    this.argument('componentName', { type: String, required: false });

    this.argument('path', { type: String, required: false });
  }

  prompting() {
    if (this.options.componentName) {
      if (this.options.path) this.props = this.options;
      else
        this.props = Object.assign(this.options, {
          path: DEFAULT_PATH
        });
      return;
    }

    return this.prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'Name of component?',
        default: this.options.phaser ? 'Game' : 'MyComponent'
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where would you like the component?',
        default: this.options.path || DEFAULT_PATH
      }
    ]).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.log(yosay(`Creating  ${chalk.red(this.props.componentName)}`));

    if (this.options.phaser) {
      let pkg = this.fs.readJSON(this.destinationPath('package.json'));
      extend(pkg, {
        dependencies: {
          'phaser-ce': '^2.10.0'
        }
      });

      this.spawnCommandSync('rm', ['package.json']);

      this.fs.writeJSON(this.destinationPath('package.json'), pkg);
    }

    this.destinationRoot(this.destinationPath(this.props.path));

    if (this.options.phaser) {
      this.fs.copyTpl(
        this.templatePath('Game.coffee'),
        this.destinationPath(this.props.componentName + '.coffee')
      );
      this.fs.copy(this.templatePath('states'), this.destinationPath('states'));
    } else {
      this.fs.copyTpl(
        this.templatePath('Component.coffee'),
        this.destinationPath(this.props.componentName + '.coffee'),
        this.props
      );
    }

    if (this.fs.exists('index.coffee')) {
      this.log(chalk.green('Adding to index.coffee file. Please confirm...'));
      this.fs.append(
        this.destinationPath('index.coffee'),
        `export * from './${this.props.componentName}'`
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('index.coffee'),
        this.destinationPath('index.coffee'),
        this.props
      );
    }
  }

  install() {
    if (this.options.phaser) {
      this.log(chalk.blue('installing dependencies...'));

      this.yarnInstall().then(error => {
        if (error) {
          this.npmInstall().then(() => {
            if (error) this.log(chalk.red(error));
            else this.log(chalk.green('ALL DONE! Get Cracking!'));
          });
        } else this.log(chalk.green('ALL DONE! Get Cracking!'));
      });
    }
  }
};
