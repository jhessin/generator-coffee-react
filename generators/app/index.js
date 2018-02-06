'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

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

    // This.log(chalk.blue('reading package.json...'));
    // const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    // this.log(chalk.green('DONE!'));
    this.log(chalk.blue('Updating package.json...'));
    this.fs.extendJSON(this.destinationPath('package.json'), {
      scripts: {
        start: 'coffee -o src/ -cbw cs/ & react-scripts start',
        build: 'coffee -o src/ -cb cs/ & react-scripts build'
      }
    });

    // This.log(chalk.blue('writing changes...'));
    // This.fs.writeJSON(this.destinationPath('package.json'), pkg);
    this.log(chalk.green('DONE!'));
  }

  install() {
    this.log(chalk.blue('installing dependencies...'));
    this.spawnCommandSync(
      'yarn',
      [
        'add',
        '@jhessin/react-hyperscript-helpers'
      ] /* {
      cwd: this.destinationRoot()
    } */
    );

    this.spawnCommandSync(
      'yarn',
      [
        'add',
        '--dev',
        'coffeescript',
        'coffeelint'
      ] /* {
      cwd: this.destinationRoot()
    } */
    );

    this.log(chalk.green('ALL DONE! Get Cracking!'));
  }
};
