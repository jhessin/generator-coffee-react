'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const extend = require('deep-extend');

const pkgPlus = {
  scripts: {
    start: 'coffee -o src/ -cbw cs/ & react-scripts start',
    build: 'coffee -o src/ -cb cs/ & react-scripts build',
    comp: 'yo coffee-react:comp',
    cont: 'yo coffee-react:cont'
  },
  dependencies: {
    '@jhessin/react-hyperscript-helpers': 'latest'
  },
  devDependencies: {
    coffeescript: 'latest',
    coffeelint: 'latest'
  }
};

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', { type: String, required: false });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the majestic ${chalk.red('generator-coffee-react')} generator!\n`)
    );

    if (this.options.appname) {
      this.props = this.options;
      return;
    }

    const prompts = [
      {
        type: 'input',
        name: 'appname',
        message: 'What name shall we give your project?',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.log(
      `Creating ${chalk.green(this.props.appname)} using ${chalk.green(
        'create-react-app...'
      )}`
    );

    this.spawnCommandSync('create-react-app', [this.props.appname]);

    this.log(chalk.blue('copying coffeescript starter files...'));
    this.fs.copy(
      this.templatePath('cs'),
      this.destinationPath(this.props.appname + '/cs')
    );
    this.log(chalk.green('DONE!'));

    this.log(chalk.blue('changing path...'));
    this.destinationRoot(this.destinationPath(this.props.appname));
    this.log(chalk.green('DONE!'));

    this.log(chalk.blue('Updating package.json...'));
    const pkg = this.fs.readJSON(this.destinationPath('package.json'));
    extend(pkg, pkgPlus);

    this.spawnCommandSync('rm', ['package.json']);

    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    this.log(chalk.green('DONE!'));
  }

  install() {
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
};
